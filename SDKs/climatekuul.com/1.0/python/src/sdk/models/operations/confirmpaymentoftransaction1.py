import dataclasses
from typing import Optional


CONFIRM_PAYMENT_OF_TRANSACTION1_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class ConfirmPaymentOfTransaction1RequestBody:
    confirm_transaction: str = dataclasses.field(metadata={'form': { 'field_name': 'confirmTransaction' }})
    transaction_id: str = dataclasses.field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclasses.dataclass
class ConfirmPaymentOfTransaction1Request:
    request: Optional[ConfirmPaymentOfTransaction1RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ConfirmPaymentOfTransaction1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
