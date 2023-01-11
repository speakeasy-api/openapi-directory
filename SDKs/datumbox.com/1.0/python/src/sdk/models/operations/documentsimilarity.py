import dataclasses
from typing import Optional


@dataclasses.dataclass
class DocumentSimilarityRequestBody:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    copy: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'copy' }})
    original: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'original' }})
    

@dataclasses.dataclass
class DocumentSimilarityRequest:
    request: Optional[DocumentSimilarityRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class DocumentSimilarityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
