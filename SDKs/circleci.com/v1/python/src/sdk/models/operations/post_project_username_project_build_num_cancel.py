import dataclasses
from typing import Optional
from ..shared import build as shared_build


@dataclasses.dataclass
class PostProjectUsernameProjectBuildNumCancelPathParams:
    build_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'build_num', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectBuildNumCancelRequest:
    path_params: PostProjectUsernameProjectBuildNumCancelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostProjectUsernameProjectBuildNumCancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    build: Optional[shared_build.Build] = dataclasses.field(default=None)
    
