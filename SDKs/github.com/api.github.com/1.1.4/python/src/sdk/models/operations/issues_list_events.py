import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import issue_event_for_issue as shared_issue_event_for_issue


@dataclasses.dataclass
class IssuesListEventsPathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListEventsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListEventsRequest:
    path_params: IssuesListEventsPathParams = dataclasses.field()
    query_params: IssuesListEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListEventsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issue_event_for_issues: Optional[list[shared_issue_event_for_issue.IssueEventForIssue]] = dataclasses.field(default=None)
    
