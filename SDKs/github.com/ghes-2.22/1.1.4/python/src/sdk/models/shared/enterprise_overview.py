import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewComments:
    total_commit_comments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_commit_comments') }})
    total_gist_comments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_gist_comments') }})
    total_issue_comments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_issue_comments') }})
    total_pull_request_comments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pull_request_comments') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewGists:
    private_gists: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_gists') }})
    public_gists: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_gists') }})
    total_gists: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_gists') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewHooks:
    active_hooks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_hooks') }})
    inactive_hooks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inactive_hooks') }})
    total_hooks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_hooks') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewIssues:
    closed_issues: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_issues') }})
    open_issues: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    total_issues: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_issues') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewMilestones:
    closed_milestones: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_milestones') }})
    open_milestones: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_milestones') }})
    total_milestones: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_milestones') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewOrgs:
    disabled_orgs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled_orgs') }})
    total_orgs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_orgs') }})
    total_team_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_team_members') }})
    total_teams: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_teams') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewPages:
    total_pages: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pages') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewPulls:
    mergeable_pulls: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeable_pulls') }})
    merged_pulls: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged_pulls') }})
    total_pulls: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pulls') }})
    unmergeable_pulls: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmergeable_pulls') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewRepos:
    fork_repos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fork_repos') }})
    org_repos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_repos') }})
    root_repos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_repos') }})
    total_pushes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pushes') }})
    total_repos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_repos') }})
    total_wikis: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_wikis') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverviewUsers:
    admin_users: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_users') }})
    suspended_users: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended_users') }})
    total_users: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_users') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseOverview:
    comments: Optional[EnterpriseOverviewComments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    gists: Optional[EnterpriseOverviewGists] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists') }})
    hooks: Optional[EnterpriseOverviewHooks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks') }})
    issues: Optional[EnterpriseOverviewIssues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    milestones: Optional[EnterpriseOverviewMilestones] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones') }})
    orgs: Optional[EnterpriseOverviewOrgs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgs') }})
    pages: Optional[EnterpriseOverviewPages] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    pulls: Optional[EnterpriseOverviewPulls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulls') }})
    repos: Optional[EnterpriseOverviewRepos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos') }})
    users: Optional[EnterpriseOverviewUsers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
