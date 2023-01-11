import dataclasses
from typing import Optional
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class UsersListFollowingForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersListFollowingForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListFollowingForUserRequest:
    path_params: UsersListFollowingForUserPathParams = dataclasses.field()
    query_params: UsersListFollowingForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListFollowingForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
