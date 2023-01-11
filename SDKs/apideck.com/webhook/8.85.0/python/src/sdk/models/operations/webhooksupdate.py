import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import updatewebhookrequest as shared_updatewebhookrequest
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import notfoundresponse as shared_notfoundresponse
from ..shared import paymentrequiredresponse as shared_paymentrequiredresponse
from ..shared import unauthorizedresponse as shared_unauthorizedresponse
from ..shared import unexpectederrorresponse as shared_unexpectederrorresponse
from ..shared import unprocessableresponse as shared_unprocessableresponse
from ..shared import updatewebhookresponse as shared_updatewebhookresponse


@dataclasses.dataclass
class WebhooksUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebhooksUpdateHeaders:
    x_apideck_app_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebhooksUpdateSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class WebhooksUpdateRequest:
    headers: WebhooksUpdateHeaders = dataclasses.field()
    path_params: WebhooksUpdatePathParams = dataclasses.field()
    request: shared_updatewebhookrequest.UpdateWebhookRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebhooksUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    not_found_response: Optional[shared_notfoundresponse.NotFoundResponse] = dataclasses.field(default=None)
    payment_required_response: Optional[shared_paymentrequiredresponse.PaymentRequiredResponse] = dataclasses.field(default=None)
    unauthorized_response: Optional[shared_unauthorizedresponse.UnauthorizedResponse] = dataclasses.field(default=None)
    unexpected_error_response: Optional[shared_unexpectederrorresponse.UnexpectedErrorResponse] = dataclasses.field(default=None)
    unprocessable_response: Optional[shared_unprocessableresponse.UnprocessableResponse] = dataclasses.field(default=None)
    update_webhook_response: Optional[shared_updatewebhookresponse.UpdateWebhookResponse] = dataclasses.field(default=None)
    
