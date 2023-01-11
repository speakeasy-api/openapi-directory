import dataclasses
from typing import Optional
from ..shared import eventsubscription as shared_eventsubscription


@dataclasses.dataclass
class ModifyEventSubscriptionResult:
    event_subscription: Optional[shared_eventsubscription.EventSubscription] = dataclasses.field(default=None)
    
