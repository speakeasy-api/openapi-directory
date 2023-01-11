import dataclasses
from typing import Optional


@dataclasses.dataclass
class AgentStoreCopyPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    other_agent: int = dataclasses.field(metadata={'path_param': { 'field_name': 'otherAgent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AgentStoreCopyRequest:
    path_params: AgentStoreCopyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AgentStoreCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_store_copy_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
