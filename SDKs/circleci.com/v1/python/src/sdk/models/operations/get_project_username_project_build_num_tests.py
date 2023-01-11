import dataclasses
from typing import Optional
from ..shared import tests as shared_tests


@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumTestsPathParams:
    build_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'build_num', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumTestsRequest:
    path_params: GetProjectUsernameProjectBuildNumTestsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumTestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tests: Optional[shared_tests.Tests] = dataclasses.field(default=None)
    
