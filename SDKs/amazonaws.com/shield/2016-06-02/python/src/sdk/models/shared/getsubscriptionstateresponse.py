import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionstate_enum as shared_subscriptionstate_enum


@dataclass_json
@dataclasses.dataclass
class GetSubscriptionStateResponse:
    subscription_state: shared_subscriptionstate_enum.SubscriptionStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionState') }})
    
