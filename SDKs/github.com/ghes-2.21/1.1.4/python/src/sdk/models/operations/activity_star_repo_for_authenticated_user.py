import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class ActivityStarRepoForAuthenticatedUserPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityStarRepoForAuthenticatedUserRequest:
    path_params: ActivityStarRepoForAuthenticatedUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityStarRepoForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
