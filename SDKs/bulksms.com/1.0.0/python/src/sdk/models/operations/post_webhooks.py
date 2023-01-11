import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import webhookentry as shared_webhookentry
from ..shared import error as shared_error
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class PostWebhooksSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostWebhooksRequest:
    request: shared_webhookentry.WebhookEntry = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    
