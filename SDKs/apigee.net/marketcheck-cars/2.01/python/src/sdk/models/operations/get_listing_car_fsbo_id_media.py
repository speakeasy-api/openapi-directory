import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import listingmedia as shared_listingmedia


@dataclasses.dataclass
class GetListingCarFsboIDMediaPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingCarFsboIDMediaQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingCarFsboIDMediaRequest:
    path_params: GetListingCarFsboIDMediaPathParams = dataclasses.field()
    query_params: GetListingCarFsboIDMediaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingCarFsboIDMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    listing_media: Optional[shared_listingmedia.ListingMedia] = dataclasses.field(default=None)
    
