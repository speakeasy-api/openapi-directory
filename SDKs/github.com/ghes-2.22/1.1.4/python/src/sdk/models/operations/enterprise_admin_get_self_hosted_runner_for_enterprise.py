import dataclasses
from typing import Optional
from ..shared import runner_no_labels as shared_runner_no_labels


@dataclasses.dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest:
    path_params: EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_no_labels: Optional[shared_runner_no_labels.RunnerNoLabels] = dataclasses.field(default=None)
    
