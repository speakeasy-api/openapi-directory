import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook_config as shared_webhook_config


@dataclasses.dataclass
class OrgsUpdateWebhookConfigForOrgPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OrgsUpdateWebhookConfigForOrgRequestBody:
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class OrgsUpdateWebhookConfigForOrgRequest:
    path_params: OrgsUpdateWebhookConfigForOrgPathParams = dataclasses.field()
    request: Optional[OrgsUpdateWebhookConfigForOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OrgsUpdateWebhookConfigForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_config: Optional[shared_webhook_config.WebhookConfig] = dataclasses.field(default=None)
    
