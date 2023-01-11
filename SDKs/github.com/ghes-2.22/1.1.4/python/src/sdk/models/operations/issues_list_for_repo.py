import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import labels_enum as shared_labels_enum
from ..shared import repo_enum2 as shared_repo_enum2
from ..shared import basic_error as shared_basic_error
from ..shared import issue_simple as shared_issue_simple
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class IssuesListForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListForRepoQueryParams:
    assignee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee', 'style': 'form', 'explode': True }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creator', 'style': 'form', 'explode': True }})
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    labels: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    mentioned: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mentioned', 'style': 'form', 'explode': True }})
    milestone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'milestone', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared_labels_enum.LabelsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[shared_repo_enum2.RepoEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListForRepoRequest:
    path_params: IssuesListForRepoPathParams = dataclasses.field()
    query_params: IssuesListForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issue_simples: Optional[list[shared_issue_simple.IssueSimple]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
