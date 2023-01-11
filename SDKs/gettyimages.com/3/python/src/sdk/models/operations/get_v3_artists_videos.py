import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artistsvideosearchfieldvalues_enum as shared_artistsvideosearchfieldvalues_enum


@dataclasses.dataclass
class GetV3ArtistsVideosQueryParams:
    artist_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artist_name', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_artistsvideosearchfieldvalues_enum.ArtistsVideoSearchFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3ArtistsVideosHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ArtistsVideosRequest:
    headers: GetV3ArtistsVideosHeaders = dataclasses.field()
    query_params: GetV3ArtistsVideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ArtistsVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
