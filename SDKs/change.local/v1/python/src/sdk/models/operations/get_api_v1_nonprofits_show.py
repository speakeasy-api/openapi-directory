import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAPIV1NonprofitsShowQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1NonprofitsShowSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1NonprofitsShowRequest:
    query_params: GetAPIV1NonprofitsShowQueryParams = dataclasses.field()
    security: GetAPIV1NonprofitsShowSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1NonprofitsShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
