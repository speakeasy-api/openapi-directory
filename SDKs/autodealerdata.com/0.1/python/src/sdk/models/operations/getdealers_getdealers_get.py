import dataclasses
from typing import Optional
from ..shared import dealershipdataresp as shared_dealershipdataresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetDealersGetDealersGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    zip_code: int = dataclasses.field(metadata={'query_param': { 'field_name': 'zipCode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDealersGetDealersGetRequest:
    query_params: GetDealersGetDealersGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDealersGetDealersGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dealership_data_resp: Optional[shared_dealershipdataresp.DealershipDataResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
