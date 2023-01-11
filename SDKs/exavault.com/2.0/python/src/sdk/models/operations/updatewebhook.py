import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhooktriggers as shared_webhooktriggers
from ..shared import webhookresponse as shared_webhookresponse


@dataclasses.dataclass
class UpdateWebhookPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWebhookHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    
class UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum(str, Enum):
    V2 = "v2"
    V1 = "v1"


@dataclass_json
@dataclasses.dataclass
class UpdateWebhookUpdateWebhookRequestBody:
    endpoint_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUrl') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    response_version: Optional[UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseVersion') }})
    triggers: Optional[shared_webhooktriggers.WebhookTriggers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    

@dataclasses.dataclass
class UpdateWebhookRequest:
    headers: UpdateWebhookHeaders = dataclasses.field()
    path_params: UpdateWebhookPathParams = dataclasses.field()
    request: Optional[UpdateWebhookUpdateWebhookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_response: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None)
    
