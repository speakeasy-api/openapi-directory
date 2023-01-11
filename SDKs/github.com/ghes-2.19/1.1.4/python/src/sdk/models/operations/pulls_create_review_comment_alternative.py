import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import legacy_review_comment as shared_legacy_review_comment


@dataclasses.dataclass
class PullsCreateReviewCommentAlternativePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PullsCreateReviewCommentAlternativeRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    in_reply_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to') }})
    

@dataclasses.dataclass
class PullsCreateReviewCommentAlternativeRequest:
    path_params: PullsCreateReviewCommentAlternativePathParams = dataclasses.field()
    request: Optional[PullsCreateReviewCommentAlternativeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsCreateReviewCommentAlternativeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_review_comment: Optional[shared_legacy_review_comment.LegacyReviewComment] = dataclasses.field(default=None)
    
