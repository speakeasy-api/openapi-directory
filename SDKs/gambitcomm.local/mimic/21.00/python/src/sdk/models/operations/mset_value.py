import dataclasses
from typing import Optional


@dataclasses.dataclass
class MsetValuePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MsetValueRequest:
    path_params: MsetValuePathParams = dataclasses.field()
    request: Optional[list[list[str]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MsetValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    mset_value_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
