import dataclasses
from typing import Optional


@dataclasses.dataclass
class AgentStoreListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AgentStoreListRequest:
    path_params: AgentStoreListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AgentStoreListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_store_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
