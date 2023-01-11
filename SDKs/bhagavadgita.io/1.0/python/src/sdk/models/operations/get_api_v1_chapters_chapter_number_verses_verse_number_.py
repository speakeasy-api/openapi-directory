import dataclasses
from typing import Optional
from enum import Enum
from ..shared import verseschema as shared_verseschema

class GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"


@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesVerseNumberPathParams:
    chapter_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'chapter_number', 'style': 'simple', 'explode': False }})
    verse_number: GetAPIV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'verse_number', 'style': 'simple', 'explode': False }})
    
class GetAPIV1ChaptersChapterNumberVersesVerseNumberLanguageEnum(str, Enum):
    HI = "hi"


@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesVerseNumberQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    language: Optional[GetAPIV1ChaptersChapterNumberVersesVerseNumberLanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesVerseNumberRequest:
    path_params: GetAPIV1ChaptersChapterNumberVersesVerseNumberPathParams = dataclasses.field()
    query_params: GetAPIV1ChaptersChapterNumberVersesVerseNumberQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberVersesVerseNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verse_schema: Optional[shared_verseschema.VerseSchema] = dataclasses.field(default=None)
    
