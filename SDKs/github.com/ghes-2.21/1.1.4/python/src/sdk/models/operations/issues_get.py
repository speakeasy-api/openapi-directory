import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import issue as shared_issue


@dataclasses.dataclass
class IssuesGetPathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesGetRequest:
    path_params: IssuesGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issue: Optional[shared_issue.Issue] = dataclasses.field(default=None)
    
