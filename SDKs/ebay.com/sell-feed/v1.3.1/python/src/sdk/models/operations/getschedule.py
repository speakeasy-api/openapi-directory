import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userscheduleresponse as shared_userscheduleresponse


@dataclasses.dataclass
class GetSchedulePathParams:
    schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScheduleSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScheduleRequest:
    path_params: GetSchedulePathParams = dataclasses.field()
    security: GetScheduleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_schedule_response: Optional[shared_userscheduleresponse.UserScheduleResponse] = dataclasses.field(default=None)
    
