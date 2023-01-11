import dataclasses
from typing import Optional
from ..shared import environment_approvals as shared_environment_approvals


@dataclasses.dataclass
class ActionsGetReviewsForRunPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetReviewsForRunRequest:
    path_params: ActionsGetReviewsForRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetReviewsForRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment_approvals: Optional[list[shared_environment_approvals.EnvironmentApprovals]] = dataclasses.field(default=None)
    
