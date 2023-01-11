import dataclasses
from typing import Optional


@dataclasses.dataclass
class SubjectivityAnalysisRequestBody:
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclasses.dataclass
class SubjectivityAnalysisRequest:
    request: Optional[SubjectivityAnalysisRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class SubjectivityAnalysisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
