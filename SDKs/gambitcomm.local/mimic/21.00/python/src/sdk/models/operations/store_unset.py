import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreUnsetPathParams:
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoreUnsetRequest:
    path_params: StoreUnsetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoreUnsetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_unset_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
