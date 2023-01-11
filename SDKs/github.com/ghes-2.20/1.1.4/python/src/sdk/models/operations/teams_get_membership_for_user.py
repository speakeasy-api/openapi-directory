import dataclasses
from typing import Optional
from ..shared import team_membership as shared_team_membership


@dataclasses.dataclass
class TeamsGetMembershipForUserPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetMembershipForUserRequest:
    path_params: TeamsGetMembershipForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetMembershipForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_membership: Optional[shared_team_membership.TeamMembership] = dataclasses.field(default=None)
    
