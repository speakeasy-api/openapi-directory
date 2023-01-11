import dataclasses
from typing import Optional
from ..shared import travelcenter as shared_travelcenter


@dataclasses.dataclass
class GetReisezentrenLocLatLonPathParams:
    lat: float = dataclasses.field(metadata={'path_param': { 'field_name': 'lat', 'style': 'simple', 'explode': False }})
    lon: float = dataclasses.field(metadata={'path_param': { 'field_name': 'lon', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReisezentrenLocLatLonRequest:
    path_params: GetReisezentrenLocLatLonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReisezentrenLocLatLonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    travel_center: Optional[shared_travelcenter.TravelCenter] = dataclasses.field(default=None)
    
