import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sort_enum1 as shared_sort_enum1
from ..shared import sort_enum as shared_sort_enum
from ..shared import basic_error as shared_basic_error
from ..shared import issue_comment as shared_issue_comment
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class IssuesListCommentsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListCommentsForRepoQueryParams:
    direction: Optional[shared_sort_enum1.SortEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListCommentsForRepoRequest:
    path_params: IssuesListCommentsForRepoPathParams = dataclasses.field()
    query_params: IssuesListCommentsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListCommentsForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issue_comments: Optional[list[shared_issue_comment.IssueComment]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
