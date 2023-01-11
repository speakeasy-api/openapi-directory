import dataclasses



@dataclasses.dataclass
class TeamsRemoveMembershipForUserPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveMembershipForUserRequest:
    path_params: TeamsRemoveMembershipForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveMembershipForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
