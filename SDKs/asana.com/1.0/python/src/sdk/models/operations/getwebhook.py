import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookresponse as shared_webhookresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetWebhookPathParams:
    webhook_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhook_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhookQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetWebhook200ApplicationJSON:
    data: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetWebhookRequest:
    path_params: GetWebhookPathParams = dataclasses.field()
    query_params: GetWebhookQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_webhook_200_application_json_object: Optional[GetWebhook200ApplicationJSON] = dataclasses.field(default=None)
    
