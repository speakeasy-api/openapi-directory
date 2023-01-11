import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import reporttaskpagedcollection as shared_reporttaskpagedcollection


@dataclasses.dataclass
class GetReportTasksQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    report_task_statuses: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'report_task_statuses', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportTasksSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReportTasksRequest:
    query_params: GetReportTasksQueryParams = dataclasses.field()
    security: GetReportTasksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_task_paged_collection: Optional[shared_reporttaskpagedcollection.ReportTaskPagedCollection] = dataclasses.field(default=None)
    
