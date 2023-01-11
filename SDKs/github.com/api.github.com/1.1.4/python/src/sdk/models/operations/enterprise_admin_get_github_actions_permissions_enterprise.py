import dataclasses
from typing import Optional
from ..shared import actions_enterprise_permissions as shared_actions_enterprise_permissions


@dataclasses.dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest:
    path_params: EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_enterprise_permissions: Optional[shared_actions_enterprise_permissions.ActionsEnterprisePermissions] = dataclasses.field(default=None)
    
