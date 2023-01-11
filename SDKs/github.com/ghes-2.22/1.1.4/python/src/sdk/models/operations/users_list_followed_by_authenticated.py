import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class UsersListFollowedByAuthenticatedQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListFollowedByAuthenticatedRequest:
    query_params: UsersListFollowedByAuthenticatedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListFollowedByAuthenticatedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
