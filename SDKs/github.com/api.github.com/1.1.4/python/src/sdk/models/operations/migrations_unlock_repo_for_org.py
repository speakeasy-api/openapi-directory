import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class MigrationsUnlockRepoForOrgPathParams:
    migration_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repo_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsUnlockRepoForOrgRequest:
    path_params: MigrationsUnlockRepoForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsUnlockRepoForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
