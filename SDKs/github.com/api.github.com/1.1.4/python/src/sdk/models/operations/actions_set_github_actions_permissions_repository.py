import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed_actions_enum as shared_allowed_actions_enum


@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsRepositoryPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsRepositoryRequestBody:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    allowed_actions: Optional[shared_allowed_actions_enum.AllowedActionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    

@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsRepositoryRequest:
    path_params: ActionsSetGithubActionsPermissionsRepositoryPathParams = dataclasses.field()
    request: Optional[ActionsSetGithubActionsPermissionsRepositoryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetGithubActionsPermissionsRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
