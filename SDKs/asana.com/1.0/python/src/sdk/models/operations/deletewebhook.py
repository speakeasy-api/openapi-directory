import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DeleteWebhookPathParams:
    webhook_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhook_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhookQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteWebhook200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = dataclasses.field()
    query_params: DeleteWebhookQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    delete_webhook_200_application_json_object: Optional[DeleteWebhook200ApplicationJSON] = dataclasses.field(default=None)
    
