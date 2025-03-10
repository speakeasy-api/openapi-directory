"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import branch_restriction_policy as shared_branch_restriction_policy
from ..shared import integration as shared_integration
from ..shared import simple_user as shared_simple_user
from ..shared import status_check_policy as shared_status_check_policy
from ..shared import team as shared_team
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchAllowDeletions:
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchAllowForcePushes:
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchAllowForkSyncing:
    r"""Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing."""
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchBlockCreations:
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchEnforceAdmins:
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchLockBranch:
    r"""Whether to set the branch as read-only. If this is true, users will not be able to push to the branch."""
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchRequiredConversationResolution:
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchRequiredLinearHistory:
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances:
    
    teams: list[shared_team.Team] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams') }})  
    users: list[shared_simple_user.SimpleUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users') }})  
    apps: Optional[list[shared_integration.Integration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apps'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions:
    
    teams: list[shared_team.Team] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams') }})  
    teams_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams_url') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    users: list[shared_simple_user.SimpleUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users') }})  
    users_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users_url') }})  
    apps: Optional[list[shared_integration.Integration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apps'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchRequiredPullRequestReviews:
    
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    bypass_pull_request_allowances: Optional[ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bypass_pull_request_allowances'), 'exclude': lambda f: f is None }})  
    dismiss_stale_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismiss_stale_reviews'), 'exclude': lambda f: f is None }})  
    dismissal_restrictions: Optional[ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissal_restrictions'), 'exclude': lambda f: f is None }})  
    require_code_owner_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('require_code_owner_reviews'), 'exclude': lambda f: f is None }})  
    require_last_push_approval: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('require_last_push_approval'), 'exclude': lambda f: f is None }})
    r"""Whether the most recent push must be approved by someone other than the person who pushed it."""  
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_approving_review_count'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranchRequiredSignatures:
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProtectedBranch:
    r"""Branch protections protect branches"""
    
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    allow_deletions: Optional[ProtectedBranchAllowDeletions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_deletions'), 'exclude': lambda f: f is None }})  
    allow_force_pushes: Optional[ProtectedBranchAllowForcePushes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_force_pushes'), 'exclude': lambda f: f is None }})  
    allow_fork_syncing: Optional[ProtectedBranchAllowForkSyncing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_fork_syncing'), 'exclude': lambda f: f is None }})
    r"""Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing."""  
    block_creations: Optional[ProtectedBranchBlockCreations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('block_creations'), 'exclude': lambda f: f is None }})  
    enforce_admins: Optional[ProtectedBranchEnforceAdmins] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enforce_admins'), 'exclude': lambda f: f is None }})  
    lock_branch: Optional[ProtectedBranchLockBranch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lock_branch'), 'exclude': lambda f: f is None }})
    r"""Whether to set the branch as read-only. If this is true, users will not be able to push to the branch."""  
    required_conversation_resolution: Optional[ProtectedBranchRequiredConversationResolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_conversation_resolution'), 'exclude': lambda f: f is None }})  
    required_linear_history: Optional[ProtectedBranchRequiredLinearHistory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_linear_history'), 'exclude': lambda f: f is None }})  
    required_pull_request_reviews: Optional[ProtectedBranchRequiredPullRequestReviews] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_pull_request_reviews'), 'exclude': lambda f: f is None }})  
    required_signatures: Optional[ProtectedBranchRequiredSignatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_signatures'), 'exclude': lambda f: f is None }})  
    required_status_checks: Optional[shared_status_check_policy.StatusCheckPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_status_checks'), 'exclude': lambda f: f is None }})
    r"""Status Check Policy"""  
    restrictions: Optional[shared_branch_restriction_policy.BranchRestrictionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('restrictions'), 'exclude': lambda f: f is None }})
    r"""Branch Restriction Policy"""  
    