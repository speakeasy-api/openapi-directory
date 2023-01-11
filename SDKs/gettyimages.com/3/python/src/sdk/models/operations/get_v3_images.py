import dataclasses
from typing import Optional
from enum import Enum
from ..shared import imagedetailfieldvalues_enum as shared_imagedetailfieldvalues_enum
from ..shared import imagesdetailresults as shared_imagesdetailresults


@dataclasses.dataclass
class GetV3ImagesQueryParams:
    fields: Optional[list[shared_imagedetailfieldvalues_enum.ImageDetailFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesRequest:
    headers: GetV3ImagesHeaders = dataclasses.field()
    query_params: GetV3ImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    images_detail_results: Optional[shared_imagesdetailresults.ImagesDetailResults] = dataclasses.field(default=None)
    
