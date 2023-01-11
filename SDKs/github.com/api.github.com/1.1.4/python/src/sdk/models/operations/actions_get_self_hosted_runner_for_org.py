import dataclasses
from typing import Optional
from ..shared import runner as shared_runner


@dataclasses.dataclass
class ActionsGetSelfHostedRunnerForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetSelfHostedRunnerForOrgRequest:
    path_params: ActionsGetSelfHostedRunnerForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetSelfHostedRunnerForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner: Optional[shared_runner.Runner] = dataclasses.field(default=None)
    
