import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class ActivityListReceivedEventsForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListReceivedEventsForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListReceivedEventsForUserRequest:
    path_params: ActivityListReceivedEventsForUserPathParams = dataclasses.field()
    query_params: ActivityListReceivedEventsForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListReceivedEventsForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
