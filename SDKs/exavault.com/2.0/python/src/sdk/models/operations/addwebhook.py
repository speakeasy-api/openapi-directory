import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhooktriggers as shared_webhooktriggers
from ..shared import webhookresponse as shared_webhookresponse


@dataclasses.dataclass
class AddWebhookHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    
class AddWebhookAddWebhookRequestBodyResponseVersionEnum(str, Enum):
    V1 = "v1"
    V2 = "v2"


@dataclass_json
@dataclasses.dataclass
class AddWebhookAddWebhookRequestBody:
    endpoint_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUrl') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    response_version: Optional[AddWebhookAddWebhookRequestBodyResponseVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseVersion') }})
    triggers: Optional[shared_webhooktriggers.WebhookTriggers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    

@dataclasses.dataclass
class AddWebhookRequest:
    headers: AddWebhookHeaders = dataclasses.field()
    request: Optional[AddWebhookAddWebhookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_response: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None)
    
