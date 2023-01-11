import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookresponse as shared_webhookresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetWebhooksQueryParams:
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resource', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetWebhooks200ApplicationJSON:
    data: Optional[list[shared_webhookresponse.WebhookResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetWebhooksRequest:
    query_params: GetWebhooksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_webhooks_200_application_json_object: Optional[GetWebhooks200ApplicationJSON] = dataclasses.field(default=None)
    
