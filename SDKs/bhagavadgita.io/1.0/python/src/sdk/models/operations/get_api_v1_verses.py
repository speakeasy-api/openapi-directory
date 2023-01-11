import dataclasses
from typing import Optional
from enum import Enum
from ..shared import verseschema as shared_verseschema

class GetAPIV1VersesLanguageEnum(str, Enum):
    HI = "hi"


@dataclasses.dataclass
class GetAPIV1VersesQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    language: Optional[GetAPIV1VersesLanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1VersesRequest:
    query_params: GetAPIV1VersesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1VersesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verse_schema: Optional[shared_verseschema.VerseSchema] = dataclasses.field(default=None)
    
