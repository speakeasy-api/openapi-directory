import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessDelPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccessDelRequest:
    path_params: AccessDelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccessDelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_del_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
