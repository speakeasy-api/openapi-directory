import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import travelcenter as shared_travelcenter


@dataclasses.dataclass
class GetReisezentrenQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReisezentrenRequest:
    query_params: GetReisezentrenQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReisezentrenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    travel_center_list: Optional[list[shared_travelcenter.TravelCenter]] = dataclasses.field(default=None)
    
