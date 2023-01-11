import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreGetPathParams:
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoreGetRequest:
    path_params: StoreGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoreGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_get_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
