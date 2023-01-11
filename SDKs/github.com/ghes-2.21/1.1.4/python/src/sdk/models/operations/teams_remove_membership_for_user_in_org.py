import dataclasses



@dataclasses.dataclass
class TeamsRemoveMembershipForUserInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveMembershipForUserInOrgRequest:
    path_params: TeamsRemoveMembershipForUserInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveMembershipForUserInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
