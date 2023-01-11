import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import listing as shared_listing


@dataclasses.dataclass
class GetListingCarAuctionIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingCarAuctionIDQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    include_relevant_links: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_relevant_links', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingCarAuctionIDRequest:
    path_params: GetListingCarAuctionIDPathParams = dataclasses.field()
    query_params: GetListingCarAuctionIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingCarAuctionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    listing: Optional[shared_listing.Listing] = dataclasses.field(default=None)
    
