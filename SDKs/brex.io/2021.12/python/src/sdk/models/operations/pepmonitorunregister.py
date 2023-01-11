import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PepMonitorUnregisterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PepMonitorUnregisterSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PepMonitorUnregisterRequest:
    path_params: PepMonitorUnregisterPathParams = dataclasses.field()
    security: PepMonitorUnregisterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PepMonitorUnregisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pep_monitor_unregister_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    pep_monitor_unregister_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
