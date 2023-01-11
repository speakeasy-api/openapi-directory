import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGetEventsQueryParams:
    is_filtered: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_filtered', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetEventsRequest:
    query_params: GetGetEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
