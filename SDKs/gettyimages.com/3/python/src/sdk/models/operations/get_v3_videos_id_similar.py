import dataclasses
from typing import Optional
from enum import Enum
from ..shared import blendedvideosfieldvalues_enum as shared_blendedvideosfieldvalues_enum


@dataclasses.dataclass
class GetV3VideosIDSimilarPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDSimilarQueryParams:
    fields: Optional[list[shared_blendedvideosfieldvalues_enum.BlendedVideosFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3VideosIDSimilarHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDSimilarRequest:
    headers: GetV3VideosIDSimilarHeaders = dataclasses.field()
    path_params: GetV3VideosIDSimilarPathParams = dataclasses.field()
    query_params: GetV3VideosIDSimilarQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3VideosIDSimilarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
