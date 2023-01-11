import dataclasses
from typing import Optional
from ..shared import org_pre_receive_hook as shared_org_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest:
    path_params: EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    org_pre_receive_hook: Optional[shared_org_pre_receive_hook.OrgPreReceiveHook] = dataclasses.field(default=None)
    
