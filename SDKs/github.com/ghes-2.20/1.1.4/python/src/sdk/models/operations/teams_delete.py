import dataclasses



@dataclasses.dataclass
class TeamsDeletePathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteRequest:
    path_params: TeamsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
