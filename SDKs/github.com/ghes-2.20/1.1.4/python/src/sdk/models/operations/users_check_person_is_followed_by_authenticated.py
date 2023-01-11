import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class UsersCheckPersonIsFollowedByAuthenticatedPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersCheckPersonIsFollowedByAuthenticatedRequest:
    path_params: UsersCheckPersonIsFollowedByAuthenticatedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersCheckPersonIsFollowedByAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
