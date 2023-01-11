import dataclasses
from typing import Optional
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import paymenthistory as shared_paymenthistory
from ..shared import servererrorresponse as shared_servererrorresponse


@dataclasses.dataclass
class DeletePaymentPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePaymentRequest:
    path_params: DeletePaymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    payment_histories: Optional[list[shared_paymenthistory.PaymentHistory]] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    
