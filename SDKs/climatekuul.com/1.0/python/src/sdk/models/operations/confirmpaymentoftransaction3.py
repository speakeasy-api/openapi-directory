import dataclasses
from typing import Optional


CONFIRM_PAYMENT_OF_TRANSACTION3_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class ConfirmPaymentOfTransaction3RequestBody:
    confirm_transaction: str = dataclasses.field(metadata={'form': { 'field_name': 'confirmTransaction' }})
    transaction_id: str = dataclasses.field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclasses.dataclass
class ConfirmPaymentOfTransaction3Request:
    request: Optional[ConfirmPaymentOfTransaction3RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ConfirmPaymentOfTransaction3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
