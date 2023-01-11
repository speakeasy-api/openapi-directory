import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import reporttask as shared_reporttask


@dataclasses.dataclass
class GetReportTaskPathParams:
    report_task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReportTaskRequest:
    path_params: GetReportTaskPathParams = dataclasses.field()
    security: GetReportTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_task: Optional[shared_reporttask.ReportTask] = dataclasses.field(default=None)
    
