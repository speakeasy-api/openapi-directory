import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookrequest as shared_webhookrequest
from ..shared import webhookresponse as shared_webhookresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateWebhookQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequestBody:
    data: Optional[shared_webhookrequest.WebhookRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateWebhook201ApplicationJSON:
    data: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateWebhookRequest:
    query_params: CreateWebhookQueryParams = dataclasses.field()
    request: CreateWebhookRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_webhook_201_application_json_object: Optional[CreateWebhook201ApplicationJSON] = dataclasses.field(default=None)
    
