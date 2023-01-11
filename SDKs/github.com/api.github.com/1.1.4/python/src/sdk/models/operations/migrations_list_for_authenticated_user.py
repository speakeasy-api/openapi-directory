import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import migration as shared_migration


@dataclasses.dataclass
class MigrationsListForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MigrationsListForAuthenticatedUserRequest:
    query_params: MigrationsListForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsListForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    migrations: Optional[list[shared_migration.Migration]] = dataclasses.field(default=None)
    
