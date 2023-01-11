import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_merge_result as shared_pull_request_merge_result
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class PullsMergePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsMergeRequestBodyMergeMethodEnum(str, Enum):
    MERGE = "merge"
    SQUASH = "squash"
    REBASE = "rebase"


@dataclass_json
@dataclasses.dataclass
class PullsMergeRequestBody:
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_message') }})
    commit_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_title') }})
    merge_method: Optional[PullsMergeRequestBodyMergeMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_method') }})
    sha: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass_json
@dataclasses.dataclass
class PullsMerge405ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PullsMerge409ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PullsMergeRequest:
    path_params: PullsMergePathParams = dataclasses.field()
    request: Optional[PullsMergeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsMergeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_merge_result: Optional[shared_pull_request_merge_result.PullRequestMergeResult] = dataclasses.field(default=None)
    pulls_merge_405_application_json_object: Optional[PullsMerge405ApplicationJSON] = dataclasses.field(default=None)
    pulls_merge_409_application_json_object: Optional[PullsMerge409ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
