import dataclasses
from typing import Optional


@dataclasses.dataclass
class MunsetValuePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MunsetValueRequest:
    path_params: MunsetValuePathParams = dataclasses.field()
    request: Optional[list[list[str]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MunsetValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    munset_value_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
