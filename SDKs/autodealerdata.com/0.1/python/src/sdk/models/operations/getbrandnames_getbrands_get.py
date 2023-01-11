import dataclasses
from typing import Optional
from ..shared import brandresp as shared_brandresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetBrandNamesGetBrandsGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBrandNamesGetBrandsGetRequest:
    query_params: GetBrandNamesGetBrandsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBrandNamesGetBrandsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    brand_resp: Optional[shared_brandresp.BrandResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
