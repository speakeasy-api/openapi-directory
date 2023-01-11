import dataclasses
from typing import Optional


URBAN_DELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class UrbanDeliveryRequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_latitude: float = dataclasses.field(metadata={'form': { 'field_name': 'destination_latitude' }})
    destination_longitude: float = dataclasses.field(metadata={'form': { 'field_name': 'destination_longitude' }})
    item_count: int = dataclasses.field(metadata={'form': { 'field_name': 'item_count' }})
    origin_latitude: float = dataclasses.field(metadata={'form': { 'field_name': 'origin_latitude' }})
    origin_longitude: float = dataclasses.field(metadata={'form': { 'field_name': 'origin_longitude' }})
    vehicle_type: str = dataclasses.field(metadata={'form': { 'field_name': 'vehicle_type' }})
    

@dataclasses.dataclass
class UrbanDeliveryRequest:
    request: Optional[UrbanDeliveryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UrbanDeliveryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
