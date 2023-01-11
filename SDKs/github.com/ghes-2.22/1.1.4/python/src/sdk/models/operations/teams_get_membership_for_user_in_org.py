import dataclasses
from typing import Optional
from ..shared import team_membership as shared_team_membership


@dataclasses.dataclass
class TeamsGetMembershipForUserInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetMembershipForUserInOrgRequest:
    path_params: TeamsGetMembershipForUserInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetMembershipForUserInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_membership: Optional[shared_team_membership.TeamMembership] = dataclasses.field(default=None)
    
