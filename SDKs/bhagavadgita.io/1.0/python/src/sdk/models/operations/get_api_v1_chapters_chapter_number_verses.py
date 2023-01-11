import dataclasses
from typing import Optional
from enum import Enum
from ..shared import verseschema as shared_verseschema


@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesPathParams:
    chapter_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'chapter_number', 'style': 'simple', 'explode': False }})
    
class GetAPIV1ChaptersChapterNumberVersesLanguageEnum(str, Enum):
    HI = "hi"


@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    language: Optional[GetAPIV1ChaptersChapterNumberVersesLanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesRequest:
    path_params: GetAPIV1ChaptersChapterNumberVersesPathParams = dataclasses.field()
    query_params: GetAPIV1ChaptersChapterNumberVersesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verse_schema: Optional[shared_verseschema.VerseSchema] = dataclasses.field(default=None)
    
