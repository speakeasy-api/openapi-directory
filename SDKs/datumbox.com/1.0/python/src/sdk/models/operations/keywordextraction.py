import dataclasses
from typing import Optional


@dataclasses.dataclass
class KeywordExtractionRequestBody:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    n: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'n' }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclasses.dataclass
class KeywordExtractionRequest:
    request: Optional[KeywordExtractionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class KeywordExtractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
