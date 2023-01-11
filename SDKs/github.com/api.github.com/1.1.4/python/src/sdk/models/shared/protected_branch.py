import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team as shared_team
from ..shared import simple_user as shared_simple_user
from ..shared import status_check_policy as shared_status_check_policy
from ..shared import branch_restriction_policy as shared_branch_restriction_policy


@dataclass_json
@dataclasses.dataclass
class ProtectedBranchAllowDeletions:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranchAllowForcePushes:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranchEnforceAdmins:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranchRequiredLinearHistory:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions:
    teams: list[shared_team.Team] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    teams_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    users: list[shared_simple_user.SimpleUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    users_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_url') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranchRequiredPullRequestReviews:
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    dismiss_stale_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    dismissal_restrictions: Optional[ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    require_code_owner_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranchRequiredSignatures:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ProtectedBranch:
    r"""ProtectedBranch
    Branch protections protect branches
    """
    
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    allow_deletions: Optional[ProtectedBranchAllowDeletions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_deletions') }})
    allow_force_pushes: Optional[ProtectedBranchAllowForcePushes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_force_pushes') }})
    enforce_admins: Optional[ProtectedBranchEnforceAdmins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    required_linear_history: Optional[ProtectedBranchRequiredLinearHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_linear_history') }})
    required_pull_request_reviews: Optional[ProtectedBranchRequiredPullRequestReviews] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    required_signatures: Optional[ProtectedBranchRequiredSignatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_signatures') }})
    required_status_checks: Optional[shared_status_check_policy.StatusCheckPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    restrictions: Optional[shared_branch_restriction_policy.BranchRestrictionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    
