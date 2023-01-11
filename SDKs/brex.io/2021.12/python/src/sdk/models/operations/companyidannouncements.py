import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyIDAnnouncementsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyIDAnnouncementsQueryParams:
    data: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'data', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanyIDAnnouncementsSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyIDAnnouncementsRequest:
    path_params: CompanyIDAnnouncementsPathParams = dataclasses.field()
    query_params: CompanyIDAnnouncementsQueryParams = dataclasses.field()
    security: CompanyIDAnnouncementsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyIDAnnouncementsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_id_announcements_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_id_announcements_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
