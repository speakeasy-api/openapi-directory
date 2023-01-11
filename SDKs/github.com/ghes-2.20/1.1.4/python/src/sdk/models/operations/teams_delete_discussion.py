import dataclasses



@dataclasses.dataclass
class TeamsDeleteDiscussionPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteDiscussionRequest:
    path_params: TeamsDeleteDiscussionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteDiscussionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
