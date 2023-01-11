import dataclasses
from typing import Optional
from ..shared import builddetail as shared_builddetail


@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumPathParams:
    build_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'build_num', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumRequest:
    path_params: GetProjectUsernameProjectBuildNumPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    build_detail: Optional[shared_builddetail.BuildDetail] = dataclasses.field(default=None)
    
