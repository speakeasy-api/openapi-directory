import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import global_hook as shared_global_hook


@dataclasses.dataclass
class EnterpriseAdminCreateGlobalWebhookHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig:
    r"""EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook.
    """
    
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateGlobalWebhookRequestBody:
    config: EnterpriseAdminCreateGlobalWebhookRequestBodyConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    events: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateGlobalWebhookRequest:
    headers: EnterpriseAdminCreateGlobalWebhookHeaders = dataclasses.field()
    request: Optional[EnterpriseAdminCreateGlobalWebhookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateGlobalWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_hook: Optional[shared_global_hook.GlobalHook] = dataclasses.field(default=None)
    
