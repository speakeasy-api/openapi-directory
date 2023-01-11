import dataclasses
from typing import Optional
from ..shared import pending_deployment as shared_pending_deployment


@dataclasses.dataclass
class ActionsGetPendingDeploymentsForRunPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetPendingDeploymentsForRunRequest:
    path_params: ActionsGetPendingDeploymentsForRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetPendingDeploymentsForRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pending_deployments: Optional[list[shared_pending_deployment.PendingDeployment]] = dataclasses.field(default=None)
    
