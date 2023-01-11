import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import updateuserschedulerequest as shared_updateuserschedulerequest


@dataclasses.dataclass
class UpdateSchedulePathParams:
    schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateScheduleSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateScheduleRequest:
    path_params: UpdateSchedulePathParams = dataclasses.field()
    request: shared_updateuserschedulerequest.UpdateUserScheduleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScheduleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
