import dataclasses
from typing import Optional


@dataclasses.dataclass
class CanvasDataSeriesAnalyticsQueryParams:
    canvas_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'canvas_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    include_deleted_step_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_deleted_step_data', 'style': 'form', 'explode': True }})
    include_step_breakdown: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_step_breakdown', 'style': 'form', 'explode': True }})
    include_variant_breakdown: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_variant_breakdown', 'style': 'form', 'explode': True }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    starting_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_at', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CanvasDataSeriesAnalyticsRequest:
    query_params: CanvasDataSeriesAnalyticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CanvasDataSeriesAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
