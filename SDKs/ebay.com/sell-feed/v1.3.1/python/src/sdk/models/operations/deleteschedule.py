import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteSchedulePathParams:
    schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteScheduleSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteScheduleRequest:
    path_params: DeleteSchedulePathParams = dataclasses.field()
    security: DeleteScheduleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
