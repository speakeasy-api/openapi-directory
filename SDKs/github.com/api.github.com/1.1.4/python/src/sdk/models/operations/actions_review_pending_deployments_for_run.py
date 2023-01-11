import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment as shared_deployment


@dataclasses.dataclass
class ActionsReviewPendingDeploymentsForRunPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    
class ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum(str, Enum):
    APPROVED = "approved"
    REJECTED = "rejected"


@dataclass_json
@dataclasses.dataclass
class ActionsReviewPendingDeploymentsForRunRequestBody:
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    environment_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_ids') }})
    state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclasses.dataclass
class ActionsReviewPendingDeploymentsForRunRequest:
    path_params: ActionsReviewPendingDeploymentsForRunPathParams = dataclasses.field()
    request: Optional[ActionsReviewPendingDeploymentsForRunRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsReviewPendingDeploymentsForRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployments: Optional[list[shared_deployment.Deployment]] = dataclasses.field(default=None)
    
