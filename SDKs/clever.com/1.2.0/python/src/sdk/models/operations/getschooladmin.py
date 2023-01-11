import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import schooladminresponse as shared_schooladminresponse


@dataclasses.dataclass
class GetSchoolAdminPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSchoolAdminQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchoolAdminRequest:
    path_params: GetSchoolAdminPathParams = dataclasses.field()
    query_params: GetSchoolAdminQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchoolAdminResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    school_admin_response: Optional[shared_schooladminresponse.SchoolAdminResponse] = dataclasses.field(default=None)
    
