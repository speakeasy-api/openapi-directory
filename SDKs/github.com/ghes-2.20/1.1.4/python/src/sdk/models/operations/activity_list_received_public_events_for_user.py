import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class ActivityListReceivedPublicEventsForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListReceivedPublicEventsForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListReceivedPublicEventsForUserRequest:
    path_params: ActivityListReceivedPublicEventsForUserPathParams = dataclasses.field()
    query_params: ActivityListReceivedPublicEventsForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListReceivedPublicEventsForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
