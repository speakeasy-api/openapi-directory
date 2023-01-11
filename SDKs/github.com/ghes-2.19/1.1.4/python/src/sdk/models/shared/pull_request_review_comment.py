import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import author_association_enum as shared_author_association_enum
from ..shared import reaction_rollup as shared_reaction_rollup
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class PullRequestReviewCommentLinksHTML:
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestReviewCommentLinksPullRequest:
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestReviewCommentLinksSelf:
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestReviewCommentLinks:
    html: PullRequestReviewCommentLinksHTML = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    pull_request: PullRequestReviewCommentLinksPullRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request') }})
    self: PullRequestReviewCommentLinksSelf = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestReviewComment:
    r"""PullRequestReviewComment
    Pull Request Review Comments are comments on a portion of the Pull Request's diff.
    """
    
    links: PullRequestReviewCommentLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    author_association: shared_author_association_enum.AuthorAssociationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    diff_hunk: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_hunk') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    original_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_commit_id') }})
    original_position: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_position') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    position: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    pull_request_review_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_review_id') }})
    pull_request_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_url') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    body_html: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    in_reply_to_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to_id') }})
    reactions: Optional[shared_reaction_rollup.ReactionRollup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    
