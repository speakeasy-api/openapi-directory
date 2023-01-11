import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAPIV1DonationsShowQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1DonationsShowSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1DonationsShowRequest:
    query_params: GetAPIV1DonationsShowQueryParams = dataclasses.field()
    security: GetAPIV1DonationsShowSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1DonationsShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
