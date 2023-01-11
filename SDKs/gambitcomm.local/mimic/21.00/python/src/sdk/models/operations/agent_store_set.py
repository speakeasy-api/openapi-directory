import dataclasses
from typing import Optional


@dataclasses.dataclass
class AgentStoreSetPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    persist: int = dataclasses.field(metadata={'path_param': { 'field_name': 'persist', 'style': 'simple', 'explode': False }})
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AgentStoreSetRequest:
    path_params: AgentStoreSetPathParams = dataclasses.field()
    request: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AgentStoreSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_store_set_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
