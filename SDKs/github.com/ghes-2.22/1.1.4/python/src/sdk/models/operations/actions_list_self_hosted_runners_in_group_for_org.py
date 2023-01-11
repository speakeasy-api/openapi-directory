import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_no_labels as shared_runner_no_labels


@dataclasses.dataclass
class ActionsListSelfHostedRunnersInGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnersInGroupForOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON:
    runners: list[shared_runner_no_labels.RunnerNoLabels] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnersInGroupForOrgRequest:
    path_params: ActionsListSelfHostedRunnersInGroupForOrgPathParams = dataclasses.field()
    query_params: ActionsListSelfHostedRunnersInGroupForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnersInGroupForOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_self_hosted_runners_in_group_for_org_200_application_json_object: Optional[ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON] = dataclasses.field(default=None)
    
