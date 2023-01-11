import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protected_branch_admin_enforced as shared_protected_branch_admin_enforced
from ..shared import protected_branch_pull_request_review as shared_protected_branch_pull_request_review
from ..shared import branch_restriction_policy as shared_branch_restriction_policy


@dataclass_json
@dataclasses.dataclass
class BranchProtectionRequiredConversationResolution:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtectionRequiredSignatures:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtectionRequiredStatusChecks:
    contexts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    contexts_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts_url') }})
    enforcement_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement_level') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchProtection:
    r"""BranchProtection
    Branch Protection
    """
    
    enforce_admins: Optional[shared_protected_branch_admin_enforced.ProtectedBranchAdminEnforced] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    required_conversation_resolution: Optional[BranchProtectionRequiredConversationResolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_conversation_resolution') }})
    required_pull_request_reviews: Optional[shared_protected_branch_pull_request_review.ProtectedBranchPullRequestReview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    required_signatures: Optional[BranchProtectionRequiredSignatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_signatures') }})
    required_status_checks: Optional[BranchProtectionRequiredStatusChecks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    restrictions: Optional[shared_branch_restriction_policy.BranchRestrictionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
