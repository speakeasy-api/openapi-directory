import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAPIV1NonprofitsListQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1NonprofitsListSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1NonprofitsListRequest:
    query_params: GetAPIV1NonprofitsListQueryParams = dataclasses.field()
    security: GetAPIV1NonprofitsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1NonprofitsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
