import dataclasses
from typing import Optional
from ..shared import envvar as shared_envvar


@dataclasses.dataclass
class PostProjectUsernameProjectEnvvarPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectEnvvarRequest:
    path_params: PostProjectUsernameProjectEnvvarPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostProjectUsernameProjectEnvvarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    envvar: Optional[shared_envvar.Envvar] = dataclasses.field(default=None)
    
