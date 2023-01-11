import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import commit as shared_commit
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposMergePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposMergeRequestBody:
    base: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    head: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head') }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_message') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposMerge404ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposMerge409ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposMergeRequest:
    path_params: ReposMergePathParams = dataclasses.field()
    request: Optional[ReposMergeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposMergeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    commit: Optional[shared_commit.Commit] = dataclasses.field(default=None)
    repos_merge_404_application_json_object: Optional[ReposMerge404ApplicationJSON] = dataclasses.field(default=None)
    repos_merge_409_application_json_object: Optional[ReposMerge409ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
