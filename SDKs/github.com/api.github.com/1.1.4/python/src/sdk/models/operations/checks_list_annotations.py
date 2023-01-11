import dataclasses
from typing import Optional
from ..shared import check_annotation as shared_check_annotation


@dataclasses.dataclass
class ChecksListAnnotationsPathParams:
    check_run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChecksListAnnotationsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ChecksListAnnotationsRequest:
    path_params: ChecksListAnnotationsPathParams = dataclasses.field()
    query_params: ChecksListAnnotationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ChecksListAnnotationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    check_annotations: Optional[list[shared_check_annotation.CheckAnnotation]] = dataclasses.field(default=None)
    
