import dataclasses
from typing import Optional
from ..shared import gpg_key as shared_gpg_key


@dataclasses.dataclass
class UsersListGpgKeysForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersListGpgKeysForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListGpgKeysForUserRequest:
    path_params: UsersListGpgKeysForUserPathParams = dataclasses.field()
    query_params: UsersListGpgKeysForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListGpgKeysForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gpg_keys: Optional[list[shared_gpg_key.GpgKey]] = dataclasses.field(default=None)
    
