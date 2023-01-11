import dataclasses
from typing import Optional


CONFIRMS_PLANTING5_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class ConfirmsPlanting5RequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_planting: str = dataclasses.field(metadata={'form': { 'field_name': 'confirmPlanting' }})
    transaction_id: str = dataclasses.field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclasses.dataclass
class ConfirmsPlanting5Request:
    request: Optional[ConfirmsPlanting5RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ConfirmsPlanting5Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
