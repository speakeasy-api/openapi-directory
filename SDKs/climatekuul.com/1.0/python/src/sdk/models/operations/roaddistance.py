import dataclasses
from typing import Optional


ROAD_DISTANCE_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class RoadDistanceRequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    travel_distance: int = dataclasses.field(metadata={'form': { 'field_name': 'travel_distance' }})
    trip_end: int = dataclasses.field(metadata={'form': { 'field_name': 'trip_end' }})
    trip_start: int = dataclasses.field(metadata={'form': { 'field_name': 'trip_start' }})
    vehicle_type: str = dataclasses.field(metadata={'form': { 'field_name': 'vehicle_type' }})
    vehicle_make: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'vehicle_make' }})
    vehicle_year: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'vehicle_year' }})
    

@dataclasses.dataclass
class RoadDistanceRequest:
    request: Optional[RoadDistanceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RoadDistanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
