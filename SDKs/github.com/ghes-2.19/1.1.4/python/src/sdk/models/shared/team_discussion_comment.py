import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reaction_rollup as shared_reaction_rollup


@dataclass_json
@dataclasses.dataclass
class TeamDiscussionCommentSimpleUser:
    r"""TeamDiscussionCommentSimpleUser
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
class TeamDiscussionComment:
    r"""TeamDiscussionComment
    A reply to a discussion within a team.
    """
    
    author: TeamDiscussionCommentSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_html: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_version') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    discussion_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discussion_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    last_edited_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_edited_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    reactions: Optional[shared_reaction_rollup.ReactionRollup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    
