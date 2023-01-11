import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriber as shared_subscriber


@dataclass_json
@dataclasses.dataclass
class DescribeSubscribersForNotificationResponse:
    r"""DescribeSubscribersForNotificationResponse
     Response of DescribeSubscribersForNotification 
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    subscribers: Optional[list[shared_subscriber.Subscriber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    
