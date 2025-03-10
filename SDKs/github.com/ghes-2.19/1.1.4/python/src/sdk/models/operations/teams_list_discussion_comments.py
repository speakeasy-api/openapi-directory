"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import team_discussion_comment as shared_team_discussion_comment
from enum import Enum
from typing import Optional

class TeamsListDiscussionCommentsDirectionEnum(str, Enum):
    r"""Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`."""
    ASC = 'asc'
    DESC = 'desc'


@dataclasses.dataclass
class TeamsListDiscussionCommentsRequest:
    
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})  
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})  
    direction: Optional[TeamsListDiscussionCommentsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    r"""Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""Results per page (max 100)"""  
    

@dataclasses.dataclass
class TeamsListDiscussionCommentsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    team_discussion_comments: Optional[list[shared_team_discussion_comment.TeamDiscussionComment]] = dataclasses.field(default=None)
    r"""Response"""  
    