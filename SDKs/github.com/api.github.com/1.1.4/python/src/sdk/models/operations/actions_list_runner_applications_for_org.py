import dataclasses
from typing import Optional
from ..shared import runner_application as shared_runner_application


@dataclasses.dataclass
class ActionsListRunnerApplicationsForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListRunnerApplicationsForOrgRequest:
    path_params: ActionsListRunnerApplicationsForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListRunnerApplicationsForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_applications: Optional[list[shared_runner_application.RunnerApplication]] = dataclasses.field(default=None)
    
