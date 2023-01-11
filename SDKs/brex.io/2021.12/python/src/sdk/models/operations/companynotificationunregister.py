import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyNotificationUnregisterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyNotificationUnregisterSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyNotificationUnregisterRequest:
    path_params: CompanyNotificationUnregisterPathParams = dataclasses.field()
    security: CompanyNotificationUnregisterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyNotificationUnregisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_notification_unregister_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
