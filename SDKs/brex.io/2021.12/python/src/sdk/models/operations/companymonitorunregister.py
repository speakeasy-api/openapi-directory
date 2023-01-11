import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyMonitorUnregisterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyMonitorUnregisterSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyMonitorUnregisterRequest:
    path_params: CompanyMonitorUnregisterPathParams = dataclasses.field()
    security: CompanyMonitorUnregisterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyMonitorUnregisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_monitor_unregister_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
