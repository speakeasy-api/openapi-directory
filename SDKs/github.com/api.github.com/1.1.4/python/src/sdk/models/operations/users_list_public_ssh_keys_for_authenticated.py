import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import key as shared_key


@dataclasses.dataclass
class UsersListPublicSSHKeysForAuthenticatedQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListPublicSSHKeysForAuthenticatedRequest:
    query_params: UsersListPublicSSHKeysForAuthenticatedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListPublicSSHKeysForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    keys: Optional[list[shared_key.Key]] = dataclasses.field(default=None)
    
