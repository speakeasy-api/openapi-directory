import dataclasses



@dataclasses.dataclass
class TeamsRemoveRepoInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveRepoInOrgRequest:
    path_params: TeamsRemoveRepoInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveRepoInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
