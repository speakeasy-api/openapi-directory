import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessLoadPathParams:
    filename: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccessLoadRequest:
    path_params: AccessLoadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccessLoadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_load_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
