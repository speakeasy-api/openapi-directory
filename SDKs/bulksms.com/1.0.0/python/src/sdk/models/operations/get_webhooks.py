import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class GetWebhooksSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetWebhooksRequest:
    security: GetWebhooksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhooks: Optional[list[shared_webhook.Webhook]] = dataclasses.field(default=None)
    
