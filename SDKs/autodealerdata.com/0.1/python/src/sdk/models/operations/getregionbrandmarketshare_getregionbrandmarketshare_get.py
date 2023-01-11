import dataclasses
from typing import Optional
from ..shared import genericresponse as shared_genericresponse
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams:
    brand_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest:
    query_params: GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generic_response: Optional[shared_genericresponse.GenericResponse] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
