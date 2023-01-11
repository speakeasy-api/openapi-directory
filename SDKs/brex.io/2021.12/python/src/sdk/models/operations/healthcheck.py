import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class HealthCheckSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class HealthCheckRequest:
    security: HealthCheckSecurity = dataclasses.field()
    

@dataclasses.dataclass
class HealthCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    health_check_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    health_check_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
