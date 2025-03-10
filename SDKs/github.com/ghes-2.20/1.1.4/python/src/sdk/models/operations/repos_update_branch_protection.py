"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import protected_branch as shared_protected_branch
from ..shared import validation_error_simple as shared_validation_error_simple
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions:
    r"""Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories."""
    
    teams: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams'), 'exclude': lambda f: f is None }})
    r"""The list of team `slug`s with dismissal access"""  
    users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users'), 'exclude': lambda f: f is None }})
    r"""The list of user `login`s with dismissal access"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews:
    r"""Require at least one approving review on a pull request, before merging. Set to `null` to disable."""
    
    dismiss_stale_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismiss_stale_reviews'), 'exclude': lambda f: f is None }})
    r"""Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit."""  
    dismissal_restrictions: Optional[ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissal_restrictions'), 'exclude': lambda f: f is None }})
    r"""Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories."""  
    require_code_owner_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('require_code_owner_reviews'), 'exclude': lambda f: f is None }})
    r"""Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them."""  
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_approving_review_count'), 'exclude': lambda f: f is None }})
    r"""Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks:
    r"""Require status checks to pass before merging. Set to `null` to disable."""
    
    contexts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contexts') }})
    r"""The list of status checks to require in order to merge into this branch"""  
    strict: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('strict') }})
    r"""Require branches to be up to date before merging."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRestrictions:
    r"""Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable."""
    
    teams: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams') }})
    r"""The list of team `slug`s with push access"""  
    users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users') }})
    r"""The list of user `login`s with push access"""  
    apps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apps'), 'exclude': lambda f: f is None }})
    r"""The list of app `slug`s with push access"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBody:
    
    enforce_admins: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enforce_admins') }})
    r"""Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable."""  
    required_pull_request_reviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_pull_request_reviews') }})
    r"""Require at least one approving review on a pull request, before merging. Set to `null` to disable."""  
    required_status_checks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_status_checks') }})
    r"""Require status checks to pass before merging. Set to `null` to disable."""  
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('restrictions') }})
    r"""Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable."""  
    allow_deletions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_deletions'), 'exclude': lambda f: f is None }})
    r"""Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see \\"[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\\" in the GitHub Help documentation."""  
    allow_force_pushes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_force_pushes'), 'exclude': lambda f: f is None }})
    r"""Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see \\"[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\\" in the GitHub Help documentation.\\" """  
    required_conversation_resolution: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_conversation_resolution'), 'exclude': lambda f: f is None }})
    r"""Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`."""  
    required_linear_history: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_linear_history'), 'exclude': lambda f: f is None }})
    r"""Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see \\"[Requiring a linear commit history](https://help.github.com/github/administering-a-repository/requiring-a-linear-commit-history)\\" in the GitHub Help documentation."""  
    

@dataclasses.dataclass
class ReposUpdateBranchProtectionRequest:
    
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    r"""The name of the branch."""  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})  
    request_body: ReposUpdateBranchProtectionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtection415ApplicationJSON:
    r"""Preview header missing"""
    
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentation_url') }})  
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    

@dataclasses.dataclass
class ReposUpdateBranchProtectionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Forbidden"""  
    protected_branch: Optional[shared_protected_branch.ProtectedBranch] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    repos_update_branch_protection_415_application_json_object: Optional[ReposUpdateBranchProtection415ApplicationJSON] = dataclasses.field(default=None)
    r"""Preview header missing"""  
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    r"""Validation failed"""  
    