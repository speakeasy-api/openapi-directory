import dataclasses
from typing import Optional


@dataclasses.dataclass
class AdultContentDetectionRequestBody:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclasses.dataclass
class AdultContentDetectionRequest:
    request: Optional[AdultContentDetectionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class AdultContentDetectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
