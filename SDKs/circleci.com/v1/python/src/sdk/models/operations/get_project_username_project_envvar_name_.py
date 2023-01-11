import dataclasses
from typing import Optional
from ..shared import envvar as shared_envvar


@dataclasses.dataclass
class GetProjectUsernameProjectEnvvarNamePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectEnvvarNameRequest:
    path_params: GetProjectUsernameProjectEnvvarNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectEnvvarNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    envvar: Optional[shared_envvar.Envvar] = dataclasses.field(default=None)
    
