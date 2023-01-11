import dataclasses
from typing import Optional
from enum import Enum
from ..shared import imagesfieldvalues_enum as shared_imagesfieldvalues_enum
from ..shared import imagesearchitemsearchresults as shared_imagesearchitemsearchresults


@dataclasses.dataclass
class GetV3ImagesIDSimilarPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDSimilarQueryParams:
    fields: Optional[list[shared_imagesfieldvalues_enum.ImagesFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3ImagesIDSimilarHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDSimilarRequest:
    headers: GetV3ImagesIDSimilarHeaders = dataclasses.field()
    path_params: GetV3ImagesIDSimilarPathParams = dataclasses.field()
    query_params: GetV3ImagesIDSimilarQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ImagesIDSimilarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_search_item_search_results: Optional[shared_imagesearchitemsearchresults.ImageSearchItemSearchResults] = dataclasses.field(default=None)
    
