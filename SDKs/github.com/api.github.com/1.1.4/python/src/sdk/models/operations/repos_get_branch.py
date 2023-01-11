import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import branch_with_protection as shared_branch_with_protection


@dataclasses.dataclass
class ReposGetBranchPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposGetBranch415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposGetBranchRequest:
    path_params: ReposGetBranchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetBranchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    branch_with_protection: Optional[shared_branch_with_protection.BranchWithProtection] = dataclasses.field(default=None)
    repos_get_branch_415_application_json_object: Optional[ReposGetBranch415ApplicationJSON] = dataclasses.field(default=None)
    
