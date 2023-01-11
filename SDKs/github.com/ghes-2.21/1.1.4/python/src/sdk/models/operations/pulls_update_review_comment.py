import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pull_request_review_comment as shared_pull_request_review_comment


@dataclasses.dataclass
class PullsUpdateReviewCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PullsUpdateReviewCommentRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class PullsUpdateReviewCommentRequest:
    path_params: PullsUpdateReviewCommentPathParams = dataclasses.field()
    request: Optional[PullsUpdateReviewCommentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsUpdateReviewCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_review_comment: Optional[shared_pull_request_review_comment.PullRequestReviewComment] = dataclasses.field(default=None)
    
