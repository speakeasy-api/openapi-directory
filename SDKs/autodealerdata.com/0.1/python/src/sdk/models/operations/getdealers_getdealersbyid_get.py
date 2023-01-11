import dataclasses
from typing import Optional
from ..shared import dealershipdataresp as shared_dealershipdataresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetDealersGetDealersByIDGetQueryParams:
    dealer_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'dealerID', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDealersGetDealersByIDGetRequest:
    query_params: GetDealersGetDealersByIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDealersGetDealersByIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dealership_data_resp: Optional[shared_dealershipdataresp.DealershipDataResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
