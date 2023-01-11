import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyMonitorChangeTypesListSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyMonitorChangeTypesListRequest:
    security: CompanyMonitorChangeTypesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyMonitorChangeTypesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_monitor_change_types_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    company_monitor_change_types_list_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
