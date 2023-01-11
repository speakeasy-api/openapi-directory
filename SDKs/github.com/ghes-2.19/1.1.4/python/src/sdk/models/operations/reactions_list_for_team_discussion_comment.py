import dataclasses
from typing import Optional
from enum import Enum
from ..shared import comment_number_enum as shared_comment_number_enum
from ..shared import reaction as shared_reaction


@dataclasses.dataclass
class ReactionsListForTeamDiscussionCommentPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionCommentQueryParams:
    content: Optional[shared_comment_number_enum.CommentNumberEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionCommentHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionCommentRequest:
    headers: ReactionsListForTeamDiscussionCommentHeaders = dataclasses.field()
    path_params: ReactionsListForTeamDiscussionCommentPathParams = dataclasses.field()
    query_params: ReactionsListForTeamDiscussionCommentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionCommentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    reactions: Optional[list[shared_reaction.Reaction]] = dataclasses.field(default=None)
    
