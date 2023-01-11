import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_no_labels as shared_runner_no_labels


@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON:
    runners: Optional[list[shared_runner_no_labels.RunnerNoLabels]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    total_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams = dataclasses.field()
    query_params: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_list_self_hosted_runners_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON] = dataclasses.field(default=None)
    
