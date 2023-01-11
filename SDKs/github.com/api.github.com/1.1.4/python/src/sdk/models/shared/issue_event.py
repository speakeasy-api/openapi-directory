import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import author_association_enum as shared_author_association_enum
from ..shared import issue_event_dismissed_review as shared_issue_event_dismissed_review
from ..shared import issue_simple as shared_issue_simple
from ..shared import issue_event_label as shared_issue_event_label
from ..shared import issue_event_milestone as shared_issue_event_milestone
from ..shared import issue_event_project_card as shared_issue_event_project_card
from ..shared import issue_event_rename as shared_issue_event_rename
from ..shared import team as shared_team


@dataclass_json
@dataclasses.dataclass
class IssueEventSimpleUser:
    r"""IssueEventSimpleUser
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
class IssueEvent:
    r"""IssueEvent
    Issue Event
    """
    
    actor: IssueEventSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    commit_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_url') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    assignee: Optional[IssueEventSimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    assigner: Optional[IssueEventSimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigner') }})
    author_association: Optional[shared_author_association_enum.AuthorAssociationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    dismissed_review: Optional[shared_issue_event_dismissed_review.IssueEventDismissedReview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_review') }})
    issue: Optional[shared_issue_simple.IssueSimple] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    label: Optional[shared_issue_event_label.IssueEventLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    lock_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_reason') }})
    milestone: Optional[shared_issue_event_milestone.IssueEventMilestone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestone') }})
    project_card: Optional[shared_issue_event_project_card.IssueEventProjectCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_card') }})
    rename: Optional[shared_issue_event_rename.IssueEventRename] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    requested_reviewer: Optional[IssueEventSimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_reviewer') }})
    requested_team: Optional[shared_team.Team] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_team') }})
    review_requester: Optional[IssueEventSimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_requester') }})
    
