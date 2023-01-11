import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ProjectsMoveColumnPathParams:
    column_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsMoveColumnRequestBody:
    position: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    

@dataclasses.dataclass
class ProjectsMoveColumnRequest:
    path_params: ProjectsMoveColumnPathParams = dataclasses.field()
    request: Optional[ProjectsMoveColumnRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsMoveColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    projects_move_column_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
