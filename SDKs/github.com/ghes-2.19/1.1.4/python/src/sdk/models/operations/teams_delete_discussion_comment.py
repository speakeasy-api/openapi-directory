import dataclasses



@dataclasses.dataclass
class TeamsDeleteDiscussionCommentPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteDiscussionCommentRequest:
    path_params: TeamsDeleteDiscussionCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteDiscussionCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
