import dataclasses
from typing import Optional
from ..shared import webhookentry as shared_webhookentry
from ..shared import error as shared_error
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class PostWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWebhooksIDRequest:
    path_params: PostWebhooksIDPathParams = dataclasses.field()
    request: shared_webhookentry.WebhookEntry = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    
