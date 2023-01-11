import dataclasses



@dataclasses.dataclass
class DeleteAnnotationPathParams:
    annotation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'annotationId', 'style': 'simple', 'explode': False }})
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAnnotationRequest:
    path_params: DeleteAnnotationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAnnotationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
