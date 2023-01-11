import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCachedImagePathParams:
    image_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'imageID', 'style': 'simple', 'explode': False }})
    listing_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'listingID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCachedImageQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCachedImageRequest:
    path_params: GetCachedImagePathParams = dataclasses.field()
    query_params: GetCachedImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCachedImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cache_image_response: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
