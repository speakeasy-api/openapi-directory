import dataclasses
from typing import Optional


@dataclasses.dataclass
class SegmentDetailsQueryParams:
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segment_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SegmentDetailsRequest:
    query_params: SegmentDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SegmentDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
