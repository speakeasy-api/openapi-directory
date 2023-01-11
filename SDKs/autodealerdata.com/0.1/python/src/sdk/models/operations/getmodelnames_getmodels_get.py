import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import modelresp as shared_modelresp


@dataclasses.dataclass
class GetModelNamesGetModelsGetQueryParams:
    brand_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModelNamesGetModelsGetRequest:
    query_params: GetModelNamesGetModelsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModelNamesGetModelsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    model_resp: Optional[shared_modelresp.ModelResp] = dataclasses.field(default=None)
    
