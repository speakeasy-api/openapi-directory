import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody:
    selected_repository_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclasses.dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest:
    path_params: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = dataclasses.field()
    request: Optional[ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
