import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import getconnectionsresponse as shared_getconnectionsresponse
from ..shared import notfoundresponse as shared_notfoundresponse
from ..shared import paymentrequiredresponse as shared_paymentrequiredresponse
from ..shared import unauthorizedresponse as shared_unauthorizedresponse
from ..shared import unexpectederrorresponse as shared_unexpectederrorresponse
from ..shared import unprocessableresponse as shared_unprocessableresponse


@dataclasses.dataclass
class ConnectionsAllQueryParams:
    api: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api', 'style': 'form', 'explode': True }})
    configured: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'configured', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConnectionsAllHeaders:
    x_apideck_app_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConnectionsAllSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ConnectionsAllRequest:
    headers: ConnectionsAllHeaders = dataclasses.field()
    query_params: ConnectionsAllQueryParams = dataclasses.field()
    security: ConnectionsAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConnectionsAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    get_connections_response: Optional[shared_getconnectionsresponse.GetConnectionsResponse] = dataclasses.field(default=None)
    not_found_response: Optional[shared_notfoundresponse.NotFoundResponse] = dataclasses.field(default=None)
    payment_required_response: Optional[shared_paymentrequiredresponse.PaymentRequiredResponse] = dataclasses.field(default=None)
    unauthorized_response: Optional[shared_unauthorizedresponse.UnauthorizedResponse] = dataclasses.field(default=None)
    unexpected_error_response: Optional[shared_unexpectederrorresponse.UnexpectedErrorResponse] = dataclasses.field(default=None)
    unprocessable_response: Optional[shared_unprocessableresponse.UnprocessableResponse] = dataclasses.field(default=None)
    
