import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import createuserschedulerequest as shared_createuserschedulerequest


@dataclasses.dataclass
class CreateScheduleSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateScheduleRequest:
    request: shared_createuserschedulerequest.CreateUserScheduleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScheduleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateScheduleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_schedule_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
