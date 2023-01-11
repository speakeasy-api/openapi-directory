import dataclasses
from typing import Optional
from enum import Enum
from ..shared import imagedetailfieldvalues_enum as shared_imagedetailfieldvalues_enum
from ..shared import imagesdetailresults as shared_imagesdetailresults


@dataclasses.dataclass
class GetV3ImagesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDQueryParams:
    fields: Optional[list[shared_imagedetailfieldvalues_enum.ImageDetailFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDRequest:
    headers: GetV3ImagesIDHeaders = dataclasses.field()
    path_params: GetV3ImagesIDPathParams = dataclasses.field()
    query_params: GetV3ImagesIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ImagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    images_detail_results: Optional[shared_imagesdetailresults.ImagesDetailResults] = dataclasses.field(default=None)
    
