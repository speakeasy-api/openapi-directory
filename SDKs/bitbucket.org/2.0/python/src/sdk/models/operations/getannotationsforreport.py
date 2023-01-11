import dataclasses
from typing import Optional
from ..shared import paginated_annotations as shared_paginated_annotations


@dataclasses.dataclass
class GetAnnotationsForReportPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationsForReportRequest:
    path_params: GetAnnotationsForReportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationsForReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_annotations: Optional[shared_paginated_annotations.PaginatedAnnotations] = dataclasses.field(default=None)
    
