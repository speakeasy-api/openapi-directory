import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_groups_enterprise as shared_runner_groups_enterprise


@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON:
    runner_groups: list[shared_runner_groups_enterprise.RunnerGroupsEnterprise] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runner_groups') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams = dataclasses.field()
    query_params: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_list_self_hosted_runner_groups_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON] = dataclasses.field(default=None)
    
