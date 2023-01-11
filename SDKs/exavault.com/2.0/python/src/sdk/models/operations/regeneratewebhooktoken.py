import dataclasses
from typing import Optional
from ..shared import webhookresponse as shared_webhookresponse


@dataclasses.dataclass
class RegenerateWebhookTokenPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegenerateWebhookTokenHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegenerateWebhookTokenRequest:
    headers: RegenerateWebhookTokenHeaders = dataclasses.field()
    path_params: RegenerateWebhookTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegenerateWebhookTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_response: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None)
    
