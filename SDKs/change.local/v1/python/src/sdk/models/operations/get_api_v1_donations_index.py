import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAPIV1DonationsIndexQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1DonationsIndexSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1DonationsIndexRequest:
    query_params: GetAPIV1DonationsIndexQueryParams = dataclasses.field()
    security: GetAPIV1DonationsIndexSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1DonationsIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
