import dataclasses



@dataclasses.dataclass
class TeamsRemoveProjectPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveProjectRequest:
    path_params: TeamsRemoveProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
