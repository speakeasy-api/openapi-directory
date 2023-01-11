import dataclasses
from typing import Optional
from ..shared import webhookresponse as shared_webhookresponse


@dataclasses.dataclass
class GetWebhookByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhookByIDQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWebhookByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhookByIDRequest:
    headers: GetWebhookByIDHeaders = dataclasses.field()
    path_params: GetWebhookByIDPathParams = dataclasses.field()
    query_params: GetWebhookByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhookByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_response: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None)
    
