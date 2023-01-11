import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import repository_collaborator_permission as shared_repository_collaborator_permission
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ProjectsGetPermissionForUserPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsGetPermissionForUser415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ProjectsGetPermissionForUserRequest:
    path_params: ProjectsGetPermissionForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsGetPermissionForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    projects_get_permission_for_user_415_application_json_object: Optional[ProjectsGetPermissionForUser415ApplicationJSON] = dataclasses.field(default=None)
    repository_collaborator_permission: Optional[shared_repository_collaborator_permission.RepositoryCollaboratorPermission] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
