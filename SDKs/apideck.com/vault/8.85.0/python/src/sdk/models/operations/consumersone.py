import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import getconsumerresponse as shared_getconsumerresponse
from ..shared import notfoundresponse as shared_notfoundresponse
from ..shared import paymentrequiredresponse as shared_paymentrequiredresponse
from ..shared import unauthorizedresponse as shared_unauthorizedresponse
from ..shared import unexpectederrorresponse as shared_unexpectederrorresponse
from ..shared import unprocessableresponse as shared_unprocessableresponse


@dataclasses.dataclass
class ConsumersOnePathParams:
    consumer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'consumer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConsumersOneHeaders:
    x_apideck_app_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConsumersOneSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ConsumersOneRequest:
    headers: ConsumersOneHeaders = dataclasses.field()
    path_params: ConsumersOnePathParams = dataclasses.field()
    security: ConsumersOneSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConsumersOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    get_consumer_response: Optional[shared_getconsumerresponse.GetConsumerResponse] = dataclasses.field(default=None)
    not_found_response: Optional[shared_notfoundresponse.NotFoundResponse] = dataclasses.field(default=None)
    payment_required_response: Optional[shared_paymentrequiredresponse.PaymentRequiredResponse] = dataclasses.field(default=None)
    unauthorized_response: Optional[shared_unauthorizedresponse.UnauthorizedResponse] = dataclasses.field(default=None)
    unexpected_error_response: Optional[shared_unexpectederrorresponse.UnexpectedErrorResponse] = dataclasses.field(default=None)
    unprocessable_response: Optional[shared_unprocessableresponse.UnprocessableResponse] = dataclasses.field(default=None)
    
