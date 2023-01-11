import dataclasses
from typing import Optional
from enum import Enum
from ..shared import page_enum as shared_page_enum
from ..shared import migration as shared_migration


@dataclasses.dataclass
class MigrationsListForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsListForOrgQueryParams:
    exclude: Optional[list[shared_page_enum.PageEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MigrationsListForOrgRequest:
    path_params: MigrationsListForOrgPathParams = dataclasses.field()
    query_params: MigrationsListForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsListForOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    migrations: Optional[list[shared_migration.Migration]] = dataclasses.field(default=None)
    
