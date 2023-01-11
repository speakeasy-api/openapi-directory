import dataclasses



@dataclasses.dataclass
class TeamsRemoveProjectInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveProjectInOrgRequest:
    path_params: TeamsRemoveProjectInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveProjectInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
