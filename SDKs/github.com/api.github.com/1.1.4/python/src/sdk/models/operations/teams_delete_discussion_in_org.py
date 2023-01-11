import dataclasses



@dataclasses.dataclass
class TeamsDeleteDiscussionInOrgPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteDiscussionInOrgRequest:
    path_params: TeamsDeleteDiscussionInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteDiscussionInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
