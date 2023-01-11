import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import topmodelresp as shared_topmodelresp


@dataclasses.dataclass
class GetTopModelsTopModelsGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTopModelsTopModelsGetRequest:
    query_params: GetTopModelsTopModelsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTopModelsTopModelsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    top_model_resp: Optional[shared_topmodelresp.TopModelResp] = dataclasses.field(default=None)
    
