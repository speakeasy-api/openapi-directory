import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import label as shared_label


@dataclasses.dataclass
class IssuesRemoveLabelPathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesRemoveLabelRequest:
    path_params: IssuesRemoveLabelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesRemoveLabelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None)
    
