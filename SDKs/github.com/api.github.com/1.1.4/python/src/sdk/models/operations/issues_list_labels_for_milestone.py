import dataclasses
from typing import Optional
from ..shared import label as shared_label


@dataclasses.dataclass
class IssuesListLabelsForMilestonePathParams:
    milestone_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'milestone_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListLabelsForMilestoneQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListLabelsForMilestoneRequest:
    path_params: IssuesListLabelsForMilestonePathParams = dataclasses.field()
    query_params: IssuesListLabelsForMilestoneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListLabelsForMilestoneResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None)
    
