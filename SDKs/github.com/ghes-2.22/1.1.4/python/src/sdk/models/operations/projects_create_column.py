import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import project_column as shared_project_column
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ProjectsCreateColumnPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsCreateColumnRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class ProjectsCreateColumnRequest:
    path_params: ProjectsCreateColumnPathParams = dataclasses.field()
    request: Optional[ProjectsCreateColumnRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsCreateColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_column: Optional[shared_project_column.ProjectColumn] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
