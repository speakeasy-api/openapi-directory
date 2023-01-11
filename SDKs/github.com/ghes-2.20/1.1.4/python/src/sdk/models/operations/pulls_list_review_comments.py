import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sort_enum1 as shared_sort_enum1
from ..shared import sort_enum as shared_sort_enum
from ..shared import pull_request_review_comment as shared_pull_request_review_comment


@dataclasses.dataclass
class PullsListReviewCommentsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsListReviewCommentsQueryParams:
    direction: Optional[shared_sort_enum1.SortEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PullsListReviewCommentsRequest:
    path_params: PullsListReviewCommentsPathParams = dataclasses.field()
    query_params: PullsListReviewCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsListReviewCommentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_review_comments: Optional[list[shared_pull_request_review_comment.PullRequestReviewComment]] = dataclasses.field(default=None)
    
