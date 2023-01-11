import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyMonitorListSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyMonitorListRequest:
    security: CompanyMonitorListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyMonitorListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_monitor_list_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_monitor_list_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
