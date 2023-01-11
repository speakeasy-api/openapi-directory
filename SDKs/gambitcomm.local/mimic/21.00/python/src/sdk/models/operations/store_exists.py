import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreExistsPathParams:
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoreExistsRequest:
    path_params: StoreExistsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoreExistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_exists_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
