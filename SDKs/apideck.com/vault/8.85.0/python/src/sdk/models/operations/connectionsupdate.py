import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import connection as shared_connection
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import notfoundresponse as shared_notfoundresponse
from ..shared import paymentrequiredresponse as shared_paymentrequiredresponse
from ..shared import unauthorizedresponse as shared_unauthorizedresponse
from ..shared import unexpectederrorresponse as shared_unexpectederrorresponse
from ..shared import unprocessableresponse as shared_unprocessableresponse
from ..shared import updateconnectionresponse as shared_updateconnectionresponse


@dataclasses.dataclass
class ConnectionsUpdatePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConnectionsUpdateHeaders:
    x_apideck_app_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConnectionsUpdateSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ConnectionsUpdateRequest:
    headers: ConnectionsUpdateHeaders = dataclasses.field()
    path_params: ConnectionsUpdatePathParams = dataclasses.field()
    request: shared_connection.ConnectionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ConnectionsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConnectionsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    not_found_response: Optional[shared_notfoundresponse.NotFoundResponse] = dataclasses.field(default=None)
    payment_required_response: Optional[shared_paymentrequiredresponse.PaymentRequiredResponse] = dataclasses.field(default=None)
    unauthorized_response: Optional[shared_unauthorizedresponse.UnauthorizedResponse] = dataclasses.field(default=None)
    unexpected_error_response: Optional[shared_unexpectederrorresponse.UnexpectedErrorResponse] = dataclasses.field(default=None)
    unprocessable_response: Optional[shared_unprocessableresponse.UnprocessableResponse] = dataclasses.field(default=None)
    update_connection_response: Optional[shared_updateconnectionresponse.UpdateConnectionResponse] = dataclasses.field(default=None)
    
