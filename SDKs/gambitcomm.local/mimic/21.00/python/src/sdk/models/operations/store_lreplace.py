import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreLreplacePathParams:
    index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoreLreplaceRequest:
    path_params: StoreLreplacePathParams = dataclasses.field()
    request: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoreLreplaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_lreplace_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
