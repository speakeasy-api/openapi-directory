import dataclasses
from typing import Optional


@dataclasses.dataclass
class CanvasDetailsQueryParams:
    canvas_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'canvas_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CanvasDetailsRequest:
    query_params: CanvasDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CanvasDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
