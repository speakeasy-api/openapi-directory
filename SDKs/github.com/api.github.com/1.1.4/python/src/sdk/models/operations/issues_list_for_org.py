import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import org_enum as shared_org_enum
from ..shared import labels_enum as shared_labels_enum
from ..shared import org_enum1 as shared_org_enum1
from ..shared import basic_error as shared_basic_error
from ..shared import issue as shared_issue


@dataclasses.dataclass
class IssuesListForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListForOrgQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[shared_org_enum.OrgEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    labels: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared_labels_enum.LabelsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[shared_org_enum1.OrgEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListForOrgRequest:
    path_params: IssuesListForOrgPathParams = dataclasses.field()
    query_params: IssuesListForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListForOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issues: Optional[list[shared_issue.Issue]] = dataclasses.field(default=None)
    
