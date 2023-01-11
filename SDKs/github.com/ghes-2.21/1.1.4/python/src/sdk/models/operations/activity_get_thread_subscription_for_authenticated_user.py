import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import thread_subscription as shared_thread_subscription


@dataclasses.dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserPathParams:
    thread_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserRequest:
    path_params: ActivityGetThreadSubscriptionForAuthenticatedUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    thread_subscription: Optional[shared_thread_subscription.ThreadSubscription] = dataclasses.field(default=None)
    
