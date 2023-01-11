import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import thread_subscription as shared_thread_subscription


@dataclasses.dataclass
class ActivitySetThreadSubscriptionPathParams:
    thread_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActivitySetThreadSubscriptionRequestBody:
    ignored: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    

@dataclasses.dataclass
class ActivitySetThreadSubscriptionRequest:
    path_params: ActivitySetThreadSubscriptionPathParams = dataclasses.field()
    request: Optional[ActivitySetThreadSubscriptionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActivitySetThreadSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    thread_subscription: Optional[shared_thread_subscription.ThreadSubscription] = dataclasses.field(default=None)
    
