import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyAnnouncementPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyAnnouncementSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyAnnouncementRequest:
    path_params: CompanyAnnouncementPathParams = dataclasses.field()
    security: CompanyAnnouncementSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyAnnouncementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_announcement_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_announcement_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
