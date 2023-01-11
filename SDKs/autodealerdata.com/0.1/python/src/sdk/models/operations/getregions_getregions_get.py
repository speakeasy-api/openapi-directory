import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import regionresp as shared_regionresp


@dataclasses.dataclass
class GetRegionsGetRegionsGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRegionsGetRegionsGetRequest:
    query_params: GetRegionsGetRegionsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRegionsGetRegionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    region_resp: Optional[shared_regionresp.RegionResp] = dataclasses.field(default=None)
    
