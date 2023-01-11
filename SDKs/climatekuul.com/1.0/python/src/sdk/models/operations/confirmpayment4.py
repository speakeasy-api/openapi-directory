import dataclasses
from typing import Optional


CONFIRM_PAYMENT4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class ConfirmPayment4RequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_payment: str = dataclasses.field(metadata={'form': { 'field_name': 'confirmPayment' }})
    payment_id: int = dataclasses.field(metadata={'form': { 'field_name': 'paymentID' }})
    transaction_id: str = dataclasses.field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclasses.dataclass
class ConfirmPayment4Request:
    request: Optional[ConfirmPayment4RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ConfirmPayment4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
