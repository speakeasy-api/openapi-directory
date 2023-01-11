import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_no_labels as shared_runner_no_labels


@dataclasses.dataclass
class ActionsListSelfHostedRunnersForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnersForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListSelfHostedRunnersForRepo200ApplicationJSON:
    runners: list[shared_runner_no_labels.RunnerNoLabels] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnersForRepoRequest:
    path_params: ActionsListSelfHostedRunnersForRepoPathParams = dataclasses.field()
    query_params: ActionsListSelfHostedRunnersForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnersForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_self_hosted_runners_for_repo_200_application_json_object: Optional[ActionsListSelfHostedRunnersForRepo200ApplicationJSON] = dataclasses.field(default=None)
    
