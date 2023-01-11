import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReadabilityAssessmentRequestBody:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclasses.dataclass
class ReadabilityAssessmentRequest:
    request: Optional[ReadabilityAssessmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ReadabilityAssessmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
