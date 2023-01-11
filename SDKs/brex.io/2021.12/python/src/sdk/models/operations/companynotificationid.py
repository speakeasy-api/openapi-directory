import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyNotificationIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyNotificationIDSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyNotificationIDRequest:
    path_params: CompanyNotificationIDPathParams = dataclasses.field()
    security: CompanyNotificationIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyNotificationIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_notification_id_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_notification_id_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
