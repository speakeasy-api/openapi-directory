import dataclasses
from typing import Optional
from ..shared import full_repository as shared_full_repository
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class TeamsCheckPermissionsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsCheckPermissionsForRepoRequest:
    path_params: TeamsCheckPermissionsForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsCheckPermissionsForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    full_repository: Optional[shared_full_repository.FullRepository] = dataclasses.field(default=None)
    minimal_repository: Optional[shared_minimal_repository.MinimalRepository] = dataclasses.field(default=None)
    
