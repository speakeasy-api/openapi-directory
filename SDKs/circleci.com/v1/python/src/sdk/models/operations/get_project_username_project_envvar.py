import dataclasses
from typing import Optional
from ..shared import envvar as shared_envvar


@dataclasses.dataclass
class GetProjectUsernameProjectEnvvarPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectEnvvarRequest:
    path_params: GetProjectUsernameProjectEnvvarPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectEnvvarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    envvars: Optional[list[shared_envvar.Envvar]] = dataclasses.field(default=None)
    
