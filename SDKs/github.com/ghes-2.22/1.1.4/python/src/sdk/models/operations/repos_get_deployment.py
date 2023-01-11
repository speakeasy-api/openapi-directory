import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import deployment as shared_deployment


@dataclasses.dataclass
class ReposGetDeploymentPathParams:
    deployment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetDeploymentRequest:
    path_params: ReposGetDeploymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    deployment: Optional[shared_deployment.Deployment] = dataclasses.field(default=None)
    
