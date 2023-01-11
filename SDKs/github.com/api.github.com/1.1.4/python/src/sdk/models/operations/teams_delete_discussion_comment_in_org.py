import dataclasses



@dataclasses.dataclass
class TeamsDeleteDiscussionCommentInOrgPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteDiscussionCommentInOrgRequest:
    path_params: TeamsDeleteDiscussionCommentInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteDiscussionCommentInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
