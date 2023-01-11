import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import deploy_key as shared_deploy_key


@dataclasses.dataclass
class ReposGetDeployKeyPathParams:
    key_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetDeployKeyRequest:
    path_params: ReposGetDeployKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetDeployKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    deploy_key: Optional[shared_deploy_key.DeployKey] = dataclasses.field(default=None)
    
