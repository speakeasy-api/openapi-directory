import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessSavePathParams:
    filename: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccessSaveRequest:
    path_params: AccessSavePathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccessSaveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_save_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
