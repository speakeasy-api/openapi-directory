import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import similarsalepriceresp as shared_similarsalepriceresp


@dataclasses.dataclass
class GetMarket3SimilarSalePriceGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    days_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'daysBack', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    same_year: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sameYear', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMarket3SimilarSalePriceGetRequest:
    query_params: GetMarket3SimilarSalePriceGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMarket3SimilarSalePriceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    similar_sale_price_resp: Optional[shared_similarsalepriceresp.SimilarSalePriceResp] = dataclasses.field(default=None)
    
