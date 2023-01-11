import dataclasses



@dataclasses.dataclass
class TeamsGetMemberLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetMemberLegacyRequest:
    path_params: TeamsGetMemberLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetMemberLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
