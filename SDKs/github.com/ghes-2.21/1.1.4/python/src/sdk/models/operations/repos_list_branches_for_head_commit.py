import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branch_short as shared_branch_short
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposListBranchesForHeadCommitPathParams:
    commit_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposListBranchesForHeadCommit415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposListBranchesForHeadCommitRequest:
    path_params: ReposListBranchesForHeadCommitPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListBranchesForHeadCommitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branch_shorts: Optional[list[shared_branch_short.BranchShort]] = dataclasses.field(default=None)
    repos_list_branches_for_head_commit_415_application_json_object: Optional[ReposListBranchesForHeadCommit415ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
