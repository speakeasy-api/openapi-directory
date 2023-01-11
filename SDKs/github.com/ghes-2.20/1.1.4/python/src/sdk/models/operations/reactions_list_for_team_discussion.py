import dataclasses
from typing import Optional
from enum import Enum
from ..shared import discussion_number_enum1 as shared_discussion_number_enum1
from ..shared import reaction as shared_reaction


@dataclasses.dataclass
class ReactionsListForTeamDiscussionPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionQueryParams:
    content: Optional[shared_discussion_number_enum1.DiscussionNumberEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionRequest:
    headers: ReactionsListForTeamDiscussionHeaders = dataclasses.field()
    path_params: ReactionsListForTeamDiscussionPathParams = dataclasses.field()
    query_params: ReactionsListForTeamDiscussionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    reactions: Optional[list[shared_reaction.Reaction]] = dataclasses.field(default=None)
    
