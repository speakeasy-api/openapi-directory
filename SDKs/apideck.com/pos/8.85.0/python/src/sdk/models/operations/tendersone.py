import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import gettenderresponse as shared_gettenderresponse
from ..shared import notfoundresponse as shared_notfoundresponse
from ..shared import paymentrequiredresponse as shared_paymentrequiredresponse
from ..shared import unauthorizedresponse as shared_unauthorizedresponse
from ..shared import unexpectederrorresponse as shared_unexpectederrorresponse
from ..shared import unprocessableresponse as shared_unprocessableresponse


@dataclasses.dataclass
class TendersOnePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TendersOneQueryParams:
    raw: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TendersOneHeaders:
    x_apideck_app_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TendersOneSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TendersOneRequest:
    headers: TendersOneHeaders = dataclasses.field()
    path_params: TendersOnePathParams = dataclasses.field()
    query_params: TendersOneQueryParams = dataclasses.field()
    security: TendersOneSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TendersOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    get_tender_response: Optional[shared_gettenderresponse.GetTenderResponse] = dataclasses.field(default=None)
    not_found_response: Optional[shared_notfoundresponse.NotFoundResponse] = dataclasses.field(default=None)
    payment_required_response: Optional[shared_paymentrequiredresponse.PaymentRequiredResponse] = dataclasses.field(default=None)
    unauthorized_response: Optional[shared_unauthorizedresponse.UnauthorizedResponse] = dataclasses.field(default=None)
    unexpected_error_response: Optional[shared_unexpectederrorresponse.UnexpectedErrorResponse] = dataclasses.field(default=None)
    unprocessable_response: Optional[shared_unprocessableresponse.UnprocessableResponse] = dataclasses.field(default=None)
    
