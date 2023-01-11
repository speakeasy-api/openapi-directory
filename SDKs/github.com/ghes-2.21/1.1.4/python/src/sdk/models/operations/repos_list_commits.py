import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import commit as shared_commit
from ..shared import scim_error as shared_scim_error


@dataclasses.dataclass
class ReposListCommitsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListCommitsQueryParams:
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sha: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sha', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    until: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListCommitsRequest:
    path_params: ReposListCommitsPathParams = dataclasses.field()
    query_params: ReposListCommitsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListCommitsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    commits: Optional[list[shared_commit.Commit]] = dataclasses.field(default=None)
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    
