import dataclasses



@dataclasses.dataclass
class DeleteReportPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteReportRequest:
    path_params: DeleteReportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
