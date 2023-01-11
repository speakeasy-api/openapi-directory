import dataclasses
from typing import Optional


@dataclasses.dataclass
class MediaTabularExtractsheetQueryParams:
    entryid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entryid', 'style': 'form', 'explode': True }})
    output: str = dataclasses.field(metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    arg1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'arg1', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MediaTabularExtractsheetRequest:
    query_params: MediaTabularExtractsheetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MediaTabularExtractsheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
