import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionstatus_enum as shared_subscriptionstatus_enum


@dataclass_json
@dataclasses.dataclass
class TopicPreference:
    r"""TopicPreference
    The contact's preference for being opted-in to or opted-out of a topic.
    """
    
    subscription_status: shared_subscriptionstatus_enum.SubscriptionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionStatus') }})
    topic_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
