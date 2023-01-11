import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import global_hook_2 as shared_global_hook_2


@dataclasses.dataclass
class EnterpriseAdminUpdateGlobalWebhookPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateGlobalWebhookHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig:
    r"""EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook.
    """
    
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateGlobalWebhookRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    config: Optional[EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    events: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateGlobalWebhookRequest:
    headers: EnterpriseAdminUpdateGlobalWebhookHeaders = dataclasses.field()
    path_params: EnterpriseAdminUpdateGlobalWebhookPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateGlobalWebhookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateGlobalWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_hook_2: Optional[shared_global_hook_2.GlobalHook2] = dataclasses.field(default=None)
    
