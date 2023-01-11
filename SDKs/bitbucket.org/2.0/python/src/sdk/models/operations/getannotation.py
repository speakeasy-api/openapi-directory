import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAnnotationPathParams:
    annotation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'annotationId', 'style': 'simple', 'explode': False }})
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationRequest:
    path_params: GetAnnotationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    report_annotation: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
