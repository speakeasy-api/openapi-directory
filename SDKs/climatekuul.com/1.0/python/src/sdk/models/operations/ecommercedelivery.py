import dataclasses
from typing import Optional


ECOMMERCE_DELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class EcommerceDeliveryHeaders:
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EcommerceDeliveryRequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_latitude: float = dataclasses.field(metadata={'form': { 'field_name': 'destination_latitude' }})
    destination_longitude: float = dataclasses.field(metadata={'form': { 'field_name': 'destination_longitude' }})
    origin_latitude: float = dataclasses.field(metadata={'form': { 'field_name': 'origin_latitude' }})
    origin_longitude: float = dataclasses.field(metadata={'form': { 'field_name': 'origin_longitude' }})
    volumetric_weight: float = dataclasses.field(metadata={'form': { 'field_name': 'volumetric_weight' }})
    waybill_type: str = dataclasses.field(metadata={'form': { 'field_name': 'waybill_type' }})
    destination_airport_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'destination_airport_code' }})
    origin_airport_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'origin_airport_code' }})
    

@dataclasses.dataclass
class EcommerceDeliveryRequest:
    headers: EcommerceDeliveryHeaders = dataclasses.field()
    request: Optional[EcommerceDeliveryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class EcommerceDeliveryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
