import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed_actions_enum as shared_allowed_actions_enum
from ..shared import enabled_organizations_enum as shared_enabled_organizations_enum


@dataclasses.dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody:
    enabled_organizations: shared_enabled_organizations_enum.EnabledOrganizationsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_organizations') }})
    allowed_actions: Optional[shared_allowed_actions_enum.AllowedActionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    

@dataclasses.dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest:
    path_params: EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams = dataclasses.field()
    request: Optional[EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
