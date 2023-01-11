import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protected_branch_admin_enforced as shared_protected_branch_admin_enforced
from ..shared import protected_branch_pull_request_review as shared_protected_branch_pull_request_review
from ..shared import branch_restriction_policy as shared_branch_restriction_policy


@dataclass_json
@dataclasses.dataclass
class BranchProtectionAllowDeletions:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtectionAllowForcePushes:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtectionRequiredLinearHistory:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtectionRequiredStatusChecks:
    contexts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    enforcement_level: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement_level') }})
    contexts_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtection:
    r"""BranchProtection
    Branch Protection
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    required_status_checks: BranchProtectionRequiredStatusChecks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    allow_deletions: Optional[BranchProtectionAllowDeletions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_deletions') }})
    allow_force_pushes: Optional[BranchProtectionAllowForcePushes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_force_pushes') }})
    enforce_admins: Optional[shared_protected_branch_admin_enforced.ProtectedBranchAdminEnforced] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    required_linear_history: Optional[BranchProtectionRequiredLinearHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_linear_history') }})
    required_pull_request_reviews: Optional[shared_protected_branch_pull_request_review.ProtectedBranchPullRequestReview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    restrictions: Optional[shared_branch_restriction_policy.BranchRestrictionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
