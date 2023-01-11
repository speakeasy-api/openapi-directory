import dataclasses
from typing import Optional
from enum import Enum
from ..shared import videodetailfieldvalues_enum as shared_videodetailfieldvalues_enum


@dataclasses.dataclass
class GetV3VideosIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDQueryParams:
    fields: Optional[list[shared_videodetailfieldvalues_enum.VideoDetailFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDRequest:
    headers: GetV3VideosIDHeaders = dataclasses.field()
    path_params: GetV3VideosIDPathParams = dataclasses.field()
    query_params: GetV3VideosIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3VideosIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
