import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RepositoryLicenseSimple:
    r"""RepositoryLicenseSimple
    License Simple
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclasses.dataclass
class RepositorySimpleUser:
    r"""RepositorySimpleUser
    Simple User
    """
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    

@dataclass_json
@dataclasses.dataclass
class RepositoryPermissions:
    admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    maintain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintain') }})
    triage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triage') }})
    

@dataclass_json
@dataclasses.dataclass
class RepositoryTemplateRepositoryOwner:
    avatar_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class RepositoryTemplateRepositoryPermissions:
    admin: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclass_json
@dataclasses.dataclass
class RepositoryTemplateRepository:
    allow_merge_commit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_merge_commit') }})
    allow_rebase_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_rebase_merge') }})
    allow_squash_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_squash_merge') }})
    archive_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive_url') }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    assignees_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees_url') }})
    blobs_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_url') }})
    branches_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches_url') }})
    clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clone_url') }})
    collaborators_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators_url') }})
    comments_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commits_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits_url') }})
    compare_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare_url') }})
    contents_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    contributors_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributors_url') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    default_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    delete_branch_on_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_branch_on_merge') }})
    deployments_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_url') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    downloads_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads_url') }})
    events_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    fork: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fork') }})
    forks_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_count') }})
    forks_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_url') }})
    full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    git_commits_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_commits_url') }})
    git_refs_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_refs_url') }})
    git_tags_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_tags_url') }})
    git_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    has_downloads: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_downloads') }})
    has_issues: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_issues') }})
    has_pages: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_pages') }})
    has_projects: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_projects') }})
    has_wiki: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_wiki') }})
    homepage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    hooks_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_template: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    issue_comment_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_comment_url') }})
    issue_events_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_events_url') }})
    issues_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    keys_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys_url') }})
    labels_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    languages_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages_url') }})
    merges_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    mirror_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_count') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    open_issues_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    owner: Optional[RepositoryTemplateRepositoryOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    permissions: Optional[RepositoryTemplateRepositoryPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    pulls_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulls_url') }})
    pushed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushed_at') }})
    releases_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases_url') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssh_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_url') }})
    stargazers_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_count') }})
    stargazers_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_url') }})
    statuses_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    subscribers_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_count') }})
    subscribers_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_url') }})
    subscription_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    svn_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('svn_url') }})
    tags_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags_url') }})
    teams_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    temp_clone_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temp_clone_token') }})
    topics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    trees_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trees_url') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    visibility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    watchers_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers_count') }})
    

@dataclass_json
@dataclasses.dataclass
class Repository:
    r"""Repository
    A git repository
    """
    
    archive_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive_url') }})
    archived: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    assignees_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees_url') }})
    blobs_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_url') }})
    branches_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches_url') }})
    clone_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clone_url') }})
    collaborators_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators_url') }})
    comments_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commits_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits_url') }})
    compare_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare_url') }})
    contents_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    contributors_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributors_url') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_branch: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    deployments_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_url') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    downloads_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads_url') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    fork: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fork') }})
    forks: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks') }})
    forks_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_count') }})
    forks_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_url') }})
    full_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    git_commits_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_commits_url') }})
    git_refs_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_refs_url') }})
    git_tags_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_tags_url') }})
    git_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    has_downloads: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_downloads') }})
    has_issues: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_issues') }})
    has_pages: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_pages') }})
    has_projects: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_projects') }})
    has_wiki: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_wiki') }})
    homepage: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    hooks_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issue_comment_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_comment_url') }})
    issue_events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_events_url') }})
    issues_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    keys_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys_url') }})
    labels_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    language: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    languages_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages_url') }})
    license: RepositoryLicenseSimple = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    merges_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    mirror_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    open_issues: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    open_issues_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    owner: RepositorySimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    pulls_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulls_url') }})
    pushed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    releases_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases_url') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssh_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_url') }})
    stargazers_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_count') }})
    stargazers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_url') }})
    statuses_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    subscribers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_url') }})
    subscription_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    svn_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('svn_url') }})
    tags_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags_url') }})
    teams_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    trees_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trees_url') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    watchers: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers') }})
    watchers_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers_count') }})
    allow_merge_commit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_merge_commit') }})
    allow_rebase_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_rebase_merge') }})
    allow_squash_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_squash_merge') }})
    delete_branch_on_merge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_branch_on_merge') }})
    is_template: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    master_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_branch') }})
    network_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_count') }})
    permissions: Optional[RepositoryPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    starred_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    subscribers_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_count') }})
    temp_clone_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temp_clone_token') }})
    template_repository: Optional[RepositoryTemplateRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_repository') }})
    topics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    visibility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
