import dataclasses
from typing import Optional
from enum import Enum
from ..shared import imagesfieldvalues_enum as shared_imagesfieldvalues_enum
from ..shared import imagesearchitemsearchresults as shared_imagesearchitemsearchresults


@dataclasses.dataclass
class GetV3ImagesIDSameSeriesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDSameSeriesQueryParams:
    fields: Optional[list[shared_imagesfieldvalues_enum.ImagesFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3ImagesIDSameSeriesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDSameSeriesRequest:
    headers: GetV3ImagesIDSameSeriesHeaders = dataclasses.field()
    path_params: GetV3ImagesIDSameSeriesPathParams = dataclasses.field()
    query_params: GetV3ImagesIDSameSeriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ImagesIDSameSeriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_search_item_search_results: Optional[shared_imagesearchitemsearchresults.ImageSearchItemSearchResults] = dataclasses.field(default=None)
    
