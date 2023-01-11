import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artistsimagesearchfieldvalues_enum as shared_artistsimagesearchfieldvalues_enum


@dataclasses.dataclass
class GetV3ArtistsImagesQueryParams:
    artist_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artist_name', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_artistsimagesearchfieldvalues_enum.ArtistsImageSearchFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3ArtistsImagesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ArtistsImagesRequest:
    headers: GetV3ArtistsImagesHeaders = dataclasses.field()
    query_params: GetV3ArtistsImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ArtistsImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
