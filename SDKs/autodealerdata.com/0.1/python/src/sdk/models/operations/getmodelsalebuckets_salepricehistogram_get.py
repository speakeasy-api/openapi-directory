import dataclasses
from typing import Optional
from ..shared import bucketresp as shared_bucketresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetModelSaleBucketsSalePriceHistogramGetQueryParams:
    brand_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    model_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModelSaleBucketsSalePriceHistogramGetRequest:
    query_params: GetModelSaleBucketsSalePriceHistogramGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModelSaleBucketsSalePriceHistogramGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bucket_resp: Optional[shared_bucketresp.BucketResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
