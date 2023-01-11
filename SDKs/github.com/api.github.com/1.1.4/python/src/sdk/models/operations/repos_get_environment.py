import dataclasses
from typing import Optional
from ..shared import environment as shared_environment


@dataclasses.dataclass
class ReposGetEnvironmentPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetEnvironmentRequest:
    path_params: ReposGetEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None)
    
