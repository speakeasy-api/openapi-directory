import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ReposDeleteDeploymentPathParams:
    deployment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDeleteDeploymentRequest:
    path_params: ReposDeleteDeploymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDeleteDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
