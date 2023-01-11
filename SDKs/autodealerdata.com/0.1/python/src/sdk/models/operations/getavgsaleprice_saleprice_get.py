import dataclasses
from typing import Optional
from ..shared import basicmodelstatsresp as shared_basicmodelstatsresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetAvgSalePriceSalePriceGetQueryParams:
    brand_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAvgSalePriceSalePriceGetRequest:
    query_params: GetAvgSalePriceSalePriceGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAvgSalePriceSalePriceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_model_stats_resp: Optional[shared_basicmodelstatsresp.BasicModelStatsResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
