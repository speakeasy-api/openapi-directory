import dataclasses
from typing import Optional


@dataclasses.dataclass
class CustomEventsListQueryParams:
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomEventsListRequest:
    query_params: CustomEventsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CustomEventsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
