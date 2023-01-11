import dataclasses
from typing import Optional
from ..shared import clienterrorresponse as shared_clienterrorresponse
from ..shared import paymenthistory as shared_paymenthistory
from ..shared import servererrorresponse as shared_servererrorresponse
from ..shared import validationerrorresponse as shared_validationerrorresponse


@dataclasses.dataclass
class GetPaymentPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRequest:
    path_params: GetPaymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    client_error_response: Optional[shared_clienterrorresponse.ClientErrorResponse] = dataclasses.field(default=None)
    payment_histories: Optional[list[shared_paymenthistory.PaymentHistory]] = dataclasses.field(default=None)
    server_error_response: Optional[shared_servererrorresponse.ServerErrorResponse] = dataclasses.field(default=None)
    validation_error_response: Optional[shared_validationerrorresponse.ValidationErrorResponse] = dataclasses.field(default=None)
    
