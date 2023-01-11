import dataclasses
from typing import Optional


@dataclasses.dataclass
class SegmentListQueryParams:
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SegmentListRequest:
    query_params: SegmentListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SegmentListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
