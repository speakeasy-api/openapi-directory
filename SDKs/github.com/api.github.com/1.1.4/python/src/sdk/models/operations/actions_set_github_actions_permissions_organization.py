import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed_actions_enum as shared_allowed_actions_enum
from ..shared import enabled_repositories_enum as shared_enabled_repositories_enum


@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsOrganizationRequestBody:
    enabled_repositories: shared_enabled_repositories_enum.EnabledRepositoriesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_repositories') }})
    allowed_actions: Optional[shared_allowed_actions_enum.AllowedActionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    

@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsOrganizationRequest:
    path_params: ActionsSetGithubActionsPermissionsOrganizationPathParams = dataclasses.field()
    request: Optional[ActionsSetGithubActionsPermissionsOrganizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
