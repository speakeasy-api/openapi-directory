import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import listingextraattributes as shared_listingextraattributes


@dataclasses.dataclass
class GetListingCarIDExtraPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingCarIDExtraQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingCarIDExtraRequest:
    path_params: GetListingCarIDExtraPathParams = dataclasses.field()
    query_params: GetListingCarIDExtraQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingCarIDExtraResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    listing_extra_attributes: Optional[shared_listingextraattributes.ListingExtraAttributes] = dataclasses.field(default=None)
    
