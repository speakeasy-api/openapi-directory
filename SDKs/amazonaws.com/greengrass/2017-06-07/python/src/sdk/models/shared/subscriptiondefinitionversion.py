import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscription as shared_subscription


@dataclass_json
@dataclasses.dataclass
class SubscriptionDefinitionVersion:
    r"""SubscriptionDefinitionVersion
    Information about a subscription definition version.
    """
    
    subscriptions: Optional[list[shared_subscription.Subscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscriptions') }})
    
