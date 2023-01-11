import dataclasses
from typing import Optional


@dataclasses.dataclass
class AgentRemovePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AgentRemoveRequest:
    path_params: AgentRemovePathParams = dataclasses.field()
    

@dataclasses.dataclass
class AgentRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_remove_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
