import dataclasses
from typing import Optional


CONFIRM_CARBON_OFFSET4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class ConfirmCarbonOffset4RequestBody:
    carbon_offset: str = dataclasses.field(metadata={'form': { 'field_name': 'carbonOffset' }})
    transaction_id: str = dataclasses.field(metadata={'form': { 'field_name': 'transaction_id' }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'contactEmail' }})
    contact_first_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'contactFirstName' }})
    contact_last_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'contactLastName' }})
    

@dataclasses.dataclass
class ConfirmCarbonOffset4Request:
    request: Optional[ConfirmCarbonOffset4RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ConfirmCarbonOffset4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
