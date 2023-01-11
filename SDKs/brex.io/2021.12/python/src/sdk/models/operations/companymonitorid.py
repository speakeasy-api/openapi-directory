import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyMonitorIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyMonitorIDSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyMonitorIDRequest:
    path_params: CompanyMonitorIDPathParams = dataclasses.field()
    security: CompanyMonitorIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyMonitorIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_monitor_id_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_monitor_id_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
