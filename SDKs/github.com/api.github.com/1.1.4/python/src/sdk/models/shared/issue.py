import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user
from ..shared import author_association_enum as shared_author_association_enum
from ..shared import reaction_rollup as shared_reaction_rollup
from ..shared import repository as shared_repository


@dataclass_json
@dataclasses.dataclass
class IssueSimpleUser:
    r"""IssueSimpleUser
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
class IssueLabels2:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class IssueMilestoneSimpleUser:
    r"""IssueMilestoneSimpleUser
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
    
class IssueMilestoneStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclasses.dataclass
class IssueMilestone:
    r"""IssueMilestone
    A collection of related issues and pull requests.
    """
    
    closed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_issues: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_issues') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: IssueMilestoneSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    open_issues: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    state: IssueMilestoneStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class IssuePullRequest:
    diff_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    patch_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch_url') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    merged_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class Issue:
    r"""Issue
    Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
    """
    
    assignee: IssueSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    author_association: shared_author_association_enum.AuthorAssociationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    closed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    comments_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    labels_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    locked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    milestone: IssueMilestone = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestone') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    repository_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_url') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: IssueSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    active_lock_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_lock_reason') }})
    assignees: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_html: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    closed_by: Optional[IssueSimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_by') }})
    performed_via_github_app: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performed_via_github_app') }})
    pull_request: Optional[IssuePullRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request') }})
    reactions: Optional[shared_reaction_rollup.ReactionRollup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    repository: Optional[shared_repository.Repository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    timeline_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline_url') }})
    
