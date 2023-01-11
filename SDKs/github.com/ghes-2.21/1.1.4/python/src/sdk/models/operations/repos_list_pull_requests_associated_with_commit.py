import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pull_request_simple as shared_pull_request_simple


@dataclasses.dataclass
class ReposListPullRequestsAssociatedWithCommitPathParams:
    commit_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListPullRequestsAssociatedWithCommitQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ReposListPullRequestsAssociatedWithCommit415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposListPullRequestsAssociatedWithCommitRequest:
    path_params: ReposListPullRequestsAssociatedWithCommitPathParams = dataclasses.field()
    query_params: ReposListPullRequestsAssociatedWithCommitQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListPullRequestsAssociatedWithCommitResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_simples: Optional[list[shared_pull_request_simple.PullRequestSimple]] = dataclasses.field(default=None)
    repos_list_pull_requests_associated_with_commit_415_application_json_object: Optional[ReposListPullRequestsAssociatedWithCommit415ApplicationJSON] = dataclasses.field(default=None)
    
