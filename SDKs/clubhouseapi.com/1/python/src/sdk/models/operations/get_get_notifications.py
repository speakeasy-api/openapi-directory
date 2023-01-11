import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGetNotificationsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetNotificationsRequest:
    query_params: GetGetNotificationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetNotificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
