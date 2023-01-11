import dataclasses
from typing import Optional
from enum import Enum
from ..shared import blendedvideosfieldvalues_enum as shared_blendedvideosfieldvalues_enum


@dataclasses.dataclass
class GetV3VideosIDSameSeriesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDSameSeriesQueryParams:
    fields: Optional[list[shared_blendedvideosfieldvalues_enum.BlendedVideosFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3VideosIDSameSeriesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDSameSeriesRequest:
    headers: GetV3VideosIDSameSeriesHeaders = dataclasses.field()
    path_params: GetV3VideosIDSameSeriesPathParams = dataclasses.field()
    query_params: GetV3VideosIDSameSeriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3VideosIDSameSeriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
