import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetReisezentrenIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReisezentrenIDRequest:
    path_params: GetReisezentrenIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReisezentrenIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
