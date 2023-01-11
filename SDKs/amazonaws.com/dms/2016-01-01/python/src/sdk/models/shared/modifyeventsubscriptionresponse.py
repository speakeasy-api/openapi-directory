import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsubscription as shared_eventsubscription


@dataclass_json
@dataclasses.dataclass
class ModifyEventSubscriptionResponse:
    r"""ModifyEventSubscriptionResponse
    <p/>
    """
    
    event_subscription: Optional[shared_eventsubscription.EventSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSubscription') }})
    
