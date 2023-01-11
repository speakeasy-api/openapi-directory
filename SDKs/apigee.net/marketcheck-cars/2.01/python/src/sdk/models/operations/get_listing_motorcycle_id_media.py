import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import listingmedia as shared_listingmedia


@dataclasses.dataclass
class GetListingMotorcycleIDMediaPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingMotorcycleIDMediaQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingMotorcycleIDMediaRequest:
    path_params: GetListingMotorcycleIDMediaPathParams = dataclasses.field()
    query_params: GetListingMotorcycleIDMediaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingMotorcycleIDMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    listing_media: Optional[shared_listingmedia.ListingMedia] = dataclasses.field(default=None)
    
