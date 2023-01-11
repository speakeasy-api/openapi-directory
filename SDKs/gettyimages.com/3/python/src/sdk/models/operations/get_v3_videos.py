import dataclasses
from typing import Optional
from enum import Enum
from ..shared import videodetailfieldvalues_enum as shared_videodetailfieldvalues_enum


@dataclasses.dataclass
class GetV3VideosQueryParams:
    fields: Optional[list[shared_videodetailfieldvalues_enum.VideoDetailFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosRequest:
    headers: GetV3VideosHeaders = dataclasses.field()
    query_params: GetV3VideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3VideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
