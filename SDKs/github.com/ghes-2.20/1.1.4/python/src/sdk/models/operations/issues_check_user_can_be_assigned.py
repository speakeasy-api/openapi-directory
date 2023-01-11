import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class IssuesCheckUserCanBeAssignedPathParams:
    assignee: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignee', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesCheckUserCanBeAssignedRequest:
    path_params: IssuesCheckUserCanBeAssignedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesCheckUserCanBeAssignedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
