import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pull_request_simple as shared_pull_request_simple
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class PullsRemoveRequestedReviewersPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PullsRemoveRequestedReviewersRequestBody:
    reviewers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    team_reviewers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_reviewers') }})
    

@dataclasses.dataclass
class PullsRemoveRequestedReviewersRequest:
    path_params: PullsRemoveRequestedReviewersPathParams = dataclasses.field()
    request: Optional[PullsRemoveRequestedReviewersRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsRemoveRequestedReviewersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_simple: Optional[shared_pull_request_simple.PullRequestSimple] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
