import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import milestone as shared_milestone


@dataclasses.dataclass
class IssuesGetMilestonePathParams:
    milestone_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'milestone_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesGetMilestoneRequest:
    path_params: IssuesGetMilestonePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesGetMilestoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    milestone: Optional[shared_milestone.Milestone] = dataclasses.field(default=None)
    
