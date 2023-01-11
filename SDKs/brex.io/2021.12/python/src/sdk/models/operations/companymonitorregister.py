import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyMonitorRegisterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyMonitorRegisterRequestBody:
    callback_url: str = dataclasses.field(metadata={'form': { 'field_name': 'callbackUrl' }})
    change_type: str = dataclasses.field(metadata={'form': { 'field_name': 'changeType' }})
    

@dataclasses.dataclass
class CompanyMonitorRegisterSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyMonitorRegisterRequest:
    path_params: CompanyMonitorRegisterPathParams = dataclasses.field()
    security: CompanyMonitorRegisterSecurity = dataclasses.field()
    request: Optional[CompanyMonitorRegisterRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CompanyMonitorRegisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_monitor_register_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    company_monitor_register_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
