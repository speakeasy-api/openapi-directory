import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class MigrationsListReposForUserPathParams:
    migration_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsListReposForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MigrationsListReposForUserRequest:
    path_params: MigrationsListReposForUserPathParams = dataclasses.field()
    query_params: MigrationsListReposForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsListReposForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    
