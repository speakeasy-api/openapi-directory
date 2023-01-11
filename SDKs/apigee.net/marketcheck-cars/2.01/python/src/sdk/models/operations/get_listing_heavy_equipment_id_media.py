import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import listingmedia as shared_listingmedia


@dataclasses.dataclass
class GetListingHeavyEquipmentIDMediaPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingHeavyEquipmentIDMediaQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingHeavyEquipmentIDMediaRequest:
    path_params: GetListingHeavyEquipmentIDMediaPathParams = dataclasses.field()
    query_params: GetListingHeavyEquipmentIDMediaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingHeavyEquipmentIDMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    listing_media: Optional[shared_listingmedia.ListingMedia] = dataclasses.field(default=None)
    
