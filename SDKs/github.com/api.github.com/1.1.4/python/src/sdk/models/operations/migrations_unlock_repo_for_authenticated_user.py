import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class MigrationsUnlockRepoForAuthenticatedUserPathParams:
    migration_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    repo_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsUnlockRepoForAuthenticatedUserRequest:
    path_params: MigrationsUnlockRepoForAuthenticatedUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsUnlockRepoForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
