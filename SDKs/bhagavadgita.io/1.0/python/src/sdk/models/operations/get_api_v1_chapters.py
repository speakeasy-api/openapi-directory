import dataclasses
from typing import Optional
from enum import Enum
from ..shared import chapterschema as shared_chapterschema

class GetAPIV1ChaptersLanguageEnum(str, Enum):
    HI = "hi"


@dataclasses.dataclass
class GetAPIV1ChaptersQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    language: Optional[GetAPIV1ChaptersLanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1ChaptersRequest:
    query_params: GetAPIV1ChaptersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1ChaptersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chapter_schema: Optional[shared_chapterschema.ChapterSchema] = dataclasses.field(default=None)
    
