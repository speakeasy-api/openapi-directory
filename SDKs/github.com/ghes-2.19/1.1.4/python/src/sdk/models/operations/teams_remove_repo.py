import dataclasses



@dataclasses.dataclass
class TeamsRemoveRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveRepoRequest:
    path_params: TeamsRemoveRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
