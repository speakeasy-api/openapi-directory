import dataclasses
from typing import Optional
from enum import Enum
from ..shared import username_enum4 as shared_username_enum4
from ..shared import username_enum3 as shared_username_enum3
from ..shared import username_enum2 as shared_username_enum2
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class ReposListForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListForUserQueryParams:
    direction: Optional[shared_username_enum4.UsernameEnum4] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_username_enum3.UsernameEnum3] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[shared_username_enum2.UsernameEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListForUserRequest:
    path_params: ReposListForUserPathParams = dataclasses.field()
    query_params: ReposListForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    
