import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsubscription as shared_eventsubscription


@dataclass_json
@dataclasses.dataclass
class DescribeEventSubscriptionsResponse:
    r"""DescribeEventSubscriptionsResponse
    <p/>
    """
    
    event_subscriptions_list: Optional[list[shared_eventsubscription.EventSubscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSubscriptionsList') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
