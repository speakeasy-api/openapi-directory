import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pre_receive_hook as shared_pre_receive_hook


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreatePreReceiveHookRequestBody:
    environment: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    script_repository: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_repository') }})
    allow_downstream_configuration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downstream_configuration') }})
    enforcement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreatePreReceiveHookRequest:
    request: Optional[EnterpriseAdminCreatePreReceiveHookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreatePreReceiveHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_hook: Optional[shared_pre_receive_hook.PreReceiveHook] = dataclasses.field(default=None)
    
