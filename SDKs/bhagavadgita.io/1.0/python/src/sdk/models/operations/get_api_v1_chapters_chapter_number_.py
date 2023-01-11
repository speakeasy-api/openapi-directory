import dataclasses
from typing import Optional
from enum import Enum
from ..shared import chapterschema as shared_chapterschema


@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberPathParams:
    chapter_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'chapter_number', 'style': 'simple', 'explode': False }})
    
class GetAPIV1ChaptersChapterNumberLanguageEnum(str, Enum):
    HI = "hi"


@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    language: Optional[GetAPIV1ChaptersChapterNumberLanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberRequest:
    path_params: GetAPIV1ChaptersChapterNumberPathParams = dataclasses.field()
    query_params: GetAPIV1ChaptersChapterNumberQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1ChaptersChapterNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chapter_schema: Optional[shared_chapterschema.ChapterSchema] = dataclasses.field(default=None)
    
