import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import modelyeardistresp as shared_modelyeardistresp


@dataclasses.dataclass
class GetModelUsedDistModelYearDistGetQueryParams:
    brand_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    model_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModelUsedDistModelYearDistGetRequest:
    query_params: GetModelUsedDistModelYearDistGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModelUsedDistModelYearDistGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    model_year_dist_resp: Optional[shared_modelyeardistresp.ModelYearDistResp] = dataclasses.field(default=None)
    
