import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteReportTaskPathParams:
    report_task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteReportTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteReportTaskRequest:
    path_params: DeleteReportTaskPathParams = dataclasses.field()
    security: DeleteReportTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteReportTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
