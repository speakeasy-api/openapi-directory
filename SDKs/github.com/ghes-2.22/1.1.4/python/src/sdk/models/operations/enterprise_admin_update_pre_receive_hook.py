import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pre_receive_hook as shared_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookPathParams:
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookRequestBody:
    allow_downstream_configuration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downstream_configuration') }})
    enforcement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    environment: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    script_repository: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_repository') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdatePreReceiveHookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_hook: Optional[shared_pre_receive_hook.PreReceiveHook] = dataclasses.field(default=None)
    
