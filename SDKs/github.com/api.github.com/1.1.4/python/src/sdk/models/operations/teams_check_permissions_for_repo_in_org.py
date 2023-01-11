import dataclasses
from typing import Optional
from ..shared import team_repository as shared_team_repository


@dataclasses.dataclass
class TeamsCheckPermissionsForRepoInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsCheckPermissionsForRepoInOrgRequest:
    path_params: TeamsCheckPermissionsForRepoInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsCheckPermissionsForRepoInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_repository: Optional[shared_team_repository.TeamRepository] = dataclasses.field(default=None)
    
