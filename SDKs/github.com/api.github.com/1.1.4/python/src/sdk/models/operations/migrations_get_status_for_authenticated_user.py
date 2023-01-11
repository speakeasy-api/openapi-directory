import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import migration as shared_migration


@dataclasses.dataclass
class MigrationsGetStatusForAuthenticatedUserPathParams:
    migration_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsGetStatusForAuthenticatedUserQueryParams:
    exclude: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MigrationsGetStatusForAuthenticatedUserRequest:
    path_params: MigrationsGetStatusForAuthenticatedUserPathParams = dataclasses.field()
    query_params: MigrationsGetStatusForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsGetStatusForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    migration: Optional[shared_migration.Migration] = dataclasses.field(default=None)
    
