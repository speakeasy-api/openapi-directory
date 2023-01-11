import dataclasses



@dataclasses.dataclass
class TeamsRemoveMemberLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveMemberLegacyRequest:
    path_params: TeamsRemoveMemberLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveMemberLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
