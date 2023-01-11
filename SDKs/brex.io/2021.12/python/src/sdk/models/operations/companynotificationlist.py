import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyNotificationListSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyNotificationListRequest:
    security: CompanyNotificationListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyNotificationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_notification_list_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_notification_list_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
