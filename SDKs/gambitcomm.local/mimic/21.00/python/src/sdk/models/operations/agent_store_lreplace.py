import dataclasses
from typing import Optional


@dataclasses.dataclass
class AgentStoreLreplacePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AgentStoreLreplaceRequest:
    path_params: AgentStoreLreplacePathParams = dataclasses.field()
    request: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AgentStoreLreplaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_store_lreplace_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
