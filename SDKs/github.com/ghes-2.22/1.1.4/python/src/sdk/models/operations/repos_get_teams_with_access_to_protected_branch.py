import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team as shared_team


@dataclasses.dataclass
class ReposGetTeamsWithAccessToProtectedBranchPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetTeamsWithAccessToProtectedBranchRequest:
    path_params: ReposGetTeamsWithAccessToProtectedBranchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetTeamsWithAccessToProtectedBranchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
