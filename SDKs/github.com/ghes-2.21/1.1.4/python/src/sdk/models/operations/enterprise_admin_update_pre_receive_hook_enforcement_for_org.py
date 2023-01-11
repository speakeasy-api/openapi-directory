import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import org_pre_receive_hook as shared_org_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody:
    allow_downstream_configuration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downstream_configuration') }})
    enforcement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    org_pre_receive_hook: Optional[shared_org_pre_receive_hook.OrgPreReceiveHook] = dataclasses.field(default=None)
    
