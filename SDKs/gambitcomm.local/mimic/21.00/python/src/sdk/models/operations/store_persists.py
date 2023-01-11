import dataclasses
from typing import Optional


@dataclasses.dataclass
class StorePersistsPathParams:
    var: str = dataclasses.field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StorePersistsRequest:
    path_params: StorePersistsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StorePersistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_persists_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
