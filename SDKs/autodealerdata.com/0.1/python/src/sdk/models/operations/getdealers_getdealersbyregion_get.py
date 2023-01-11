import dataclasses
from typing import Optional
from ..shared import dealershipdatapaginatedresp as shared_dealershipdatapaginatedresp
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetDealersGetDealersByRegionGetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDealersGetDealersByRegionGetRequest:
    query_params: GetDealersGetDealersByRegionGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDealersGetDealersByRegionGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dealership_data_paginated_resp: Optional[shared_dealershipdatapaginatedresp.DealershipDataPaginatedResp] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
