import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildsummary as shared_buildsummary


@dataclasses.dataclass
class PostProjectUsernameProjectPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostProjectUsernameProjectRequestBody:
    build_parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_parameters') }})
    parallel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallel') }})
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectRequest:
    path_params: PostProjectUsernameProjectPathParams = dataclasses.field()
    request: Optional[PostProjectUsernameProjectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    build_summary: Optional[shared_buildsummary.BuildSummary] = dataclasses.field(default=None)
    
