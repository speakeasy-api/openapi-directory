import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PepMonitorListSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PepMonitorListRequest:
    security: PepMonitorListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PepMonitorListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pep_monitor_list_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    pep_monitor_list_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
