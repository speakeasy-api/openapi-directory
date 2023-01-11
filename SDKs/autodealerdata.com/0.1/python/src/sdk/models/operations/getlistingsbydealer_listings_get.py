import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import listingresp as shared_listingresp


@dataclasses.dataclass
class GetListingsByDealerListingsGetQueryParams:
    dealer_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'dealerID', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingsByDealerListingsGetRequest:
    query_params: GetListingsByDealerListingsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingsByDealerListingsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    listing_resp: Optional[shared_listingresp.ListingResp] = dataclasses.field(default=None)
    
