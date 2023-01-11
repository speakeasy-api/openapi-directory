import dataclasses



@dataclasses.dataclass
class TeamsDeleteDiscussionCommentLegacyPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteDiscussionCommentLegacyRequest:
    path_params: TeamsDeleteDiscussionCommentLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteDiscussionCommentLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
