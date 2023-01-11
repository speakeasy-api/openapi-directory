import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import username_enum1 as shared_username_enum1
from ..shared import project as shared_project
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ProjectsListForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsListForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[shared_username_enum1.UsernameEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsListForUser415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ProjectsListForUserRequest:
    path_params: ProjectsListForUserPathParams = dataclasses.field()
    query_params: ProjectsListForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    projects_list_for_user_415_application_json_object: Optional[ProjectsListForUser415ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
