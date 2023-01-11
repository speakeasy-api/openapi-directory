import dataclasses
from typing import Optional
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class UsersListQueryParams:
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListRequest:
    query_params: UsersListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
