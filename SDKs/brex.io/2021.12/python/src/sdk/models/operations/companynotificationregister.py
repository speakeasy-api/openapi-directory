import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyNotificationRegisterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyNotificationRegisterRequestBody:
    callback_url: str = dataclasses.field(metadata={'form': { 'field_name': 'callbackUrl' }})
    

@dataclasses.dataclass
class CompanyNotificationRegisterSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyNotificationRegisterRequest:
    path_params: CompanyNotificationRegisterPathParams = dataclasses.field()
    security: CompanyNotificationRegisterSecurity = dataclasses.field()
    request: Optional[CompanyNotificationRegisterRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CompanyNotificationRegisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_notification_register_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    company_notification_register_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
