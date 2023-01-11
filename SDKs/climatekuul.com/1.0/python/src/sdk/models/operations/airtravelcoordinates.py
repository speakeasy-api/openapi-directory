import dataclasses
from typing import Optional


AIRTRAVEL_COORDINATES_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class AirtravelCoordinatesHeaders:
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AirtravelCoordinatesRequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_airport_latitude: float = dataclasses.field(metadata={'form': { 'field_name': 'destination_airport_latitude' }})
    destination_airport_longitude: float = dataclasses.field(metadata={'form': { 'field_name': 'destination_airport_longitude' }})
    number_of_passengers: int = dataclasses.field(metadata={'form': { 'field_name': 'number_of_passengers' }})
    origin_airport_latitude: float = dataclasses.field(metadata={'form': { 'field_name': 'origin_airport_latitude' }})
    origin_airport_longitude: float = dataclasses.field(metadata={'form': { 'field_name': 'origin_airport_longitude' }})
    travel_class: str = dataclasses.field(metadata={'form': { 'field_name': 'travel_class' }})
    travel_mode: str = dataclasses.field(metadata={'form': { 'field_name': 'travel_mode' }})
    

@dataclasses.dataclass
class AirtravelCoordinatesRequest:
    headers: AirtravelCoordinatesHeaders = dataclasses.field()
    request: Optional[AirtravelCoordinatesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AirtravelCoordinatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
