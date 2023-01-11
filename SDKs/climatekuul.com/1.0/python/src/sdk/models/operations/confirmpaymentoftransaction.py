import dataclasses
from typing import Optional


CONFIRM_PAYMENT_OF_TRANSACTION_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class ConfirmPaymentOfTransactionRequestBody:
    confirm_transaction: str = dataclasses.field(metadata={'form': { 'field_name': 'confirmTransaction' }})
    transaction_id: str = dataclasses.field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclasses.dataclass
class ConfirmPaymentOfTransactionRequest:
    request: Optional[ConfirmPaymentOfTransactionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ConfirmPaymentOfTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
