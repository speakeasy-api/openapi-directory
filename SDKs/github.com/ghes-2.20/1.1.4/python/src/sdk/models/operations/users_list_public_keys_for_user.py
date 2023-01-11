import dataclasses
from typing import Optional
from ..shared import key_simple as shared_key_simple


@dataclasses.dataclass
class UsersListPublicKeysForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersListPublicKeysForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListPublicKeysForUserRequest:
    path_params: UsersListPublicKeysForUserPathParams = dataclasses.field()
    query_params: UsersListPublicKeysForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListPublicKeysForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    key_simples: Optional[list[shared_key_simple.KeySimple]] = dataclasses.field(default=None)
    
