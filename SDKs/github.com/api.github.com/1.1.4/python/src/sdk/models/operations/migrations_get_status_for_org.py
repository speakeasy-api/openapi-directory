import dataclasses
from typing import Optional
from enum import Enum
from ..shared import migration_id_enum as shared_migration_id_enum
from ..shared import basic_error as shared_basic_error
from ..shared import migration as shared_migration


@dataclasses.dataclass
class MigrationsGetStatusForOrgPathParams:
    migration_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsGetStatusForOrgQueryParams:
    exclude: Optional[list[shared_migration_id_enum.MigrationIDEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MigrationsGetStatusForOrgRequest:
    path_params: MigrationsGetStatusForOrgPathParams = dataclasses.field()
    query_params: MigrationsGetStatusForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsGetStatusForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    migration: Optional[shared_migration.Migration] = dataclasses.field(default=None)
    
