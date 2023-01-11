import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreSetPathParams:
    persist: int = dataclasses.field(metadata={'path_param': { 'field_name': 'persist', 'style': 'simple', 'explode': False }})
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoreSetRequest:
    path_params: StoreSetPathParams = dataclasses.field()
    request: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoreSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_set_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
