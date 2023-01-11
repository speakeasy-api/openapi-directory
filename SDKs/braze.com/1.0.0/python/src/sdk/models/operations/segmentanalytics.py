import dataclasses
from typing import Optional


@dataclasses.dataclass
class SegmentAnalyticsQueryParams:
    ending_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segment_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SegmentAnalyticsRequest:
    query_params: SegmentAnalyticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SegmentAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
