import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import notfoundresponse as shared_notfoundresponse
from ..shared import paymentrequiredresponse as shared_paymentrequiredresponse
from ..shared import resolvewebhookresponse as shared_resolvewebhookresponse
from ..shared import unauthorizedresponse as shared_unauthorizedresponse
from ..shared import unexpectederrorresponse as shared_unexpectederrorresponse
from ..shared import unprocessableresponse as shared_unprocessableresponse


@dataclasses.dataclass
class WebhooksResolvePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebhooksResolveQueryParams:
    e: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'e', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WebhooksResolveSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class WebhooksResolveRequest:
    path_params: WebhooksResolvePathParams = dataclasses.field()
    query_params: WebhooksResolveQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksResolveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebhooksResolveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    not_found_response: Optional[shared_notfoundresponse.NotFoundResponse] = dataclasses.field(default=None)
    payment_required_response: Optional[shared_paymentrequiredresponse.PaymentRequiredResponse] = dataclasses.field(default=None)
    resolve_webhook_response: Optional[shared_resolvewebhookresponse.ResolveWebhookResponse] = dataclasses.field(default=None)
    unauthorized_response: Optional[shared_unauthorizedresponse.UnauthorizedResponse] = dataclasses.field(default=None)
    unexpected_error_response: Optional[shared_unexpectederrorresponse.UnexpectedErrorResponse] = dataclasses.field(default=None)
    unprocessable_response: Optional[shared_unprocessableresponse.UnprocessableResponse] = dataclasses.field(default=None)
    
