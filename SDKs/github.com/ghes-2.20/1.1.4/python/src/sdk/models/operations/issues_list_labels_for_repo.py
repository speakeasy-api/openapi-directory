import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import label as shared_label


@dataclasses.dataclass
class IssuesListLabelsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListLabelsForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListLabelsForRepoRequest:
    path_params: IssuesListLabelsForRepoPathParams = dataclasses.field()
    query_params: IssuesListLabelsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListLabelsForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None)
    
