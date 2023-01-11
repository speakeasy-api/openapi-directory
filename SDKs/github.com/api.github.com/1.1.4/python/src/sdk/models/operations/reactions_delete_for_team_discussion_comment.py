import dataclasses



@dataclasses.dataclass
class ReactionsDeleteForTeamDiscussionCommentPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    reaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsDeleteForTeamDiscussionCommentRequest:
    path_params: ReactionsDeleteForTeamDiscussionCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsDeleteForTeamDiscussionCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
