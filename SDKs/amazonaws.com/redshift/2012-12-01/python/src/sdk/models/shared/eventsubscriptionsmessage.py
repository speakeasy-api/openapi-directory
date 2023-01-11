import dataclasses
from typing import Optional
from ..shared import eventsubscriptionslist as shared_eventsubscriptionslist


@dataclasses.dataclass
class EventSubscriptionsMessage:
    r"""EventSubscriptionsMessage
    <p/>
    """
    
    event_subscriptions_list: Optional[list[shared_eventsubscriptionslist.EventSubscriptionsList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
