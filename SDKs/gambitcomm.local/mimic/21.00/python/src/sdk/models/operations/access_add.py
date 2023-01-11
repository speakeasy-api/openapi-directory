import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessAddPathParams:
    agents: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agents', 'style': 'simple', 'explode': False }})
    mask: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccessAddRequest:
    path_params: AccessAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccessAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
