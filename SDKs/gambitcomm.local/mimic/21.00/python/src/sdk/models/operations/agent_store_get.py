import dataclasses
from typing import Optional


@dataclasses.dataclass
class AgentStoreGetPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AgentStoreGetRequest:
    path_params: AgentStoreGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AgentStoreGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_store_get_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
