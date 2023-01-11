import dataclasses
from ..shared import security as shared_security
from ..shared import createreporttask as shared_createreporttask


@dataclasses.dataclass
class CreateReportTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateReportTaskRequest:
    request: shared_createreporttask.CreateReportTask = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateReportTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateReportTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
