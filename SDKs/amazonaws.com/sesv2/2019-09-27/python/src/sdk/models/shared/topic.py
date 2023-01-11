import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionstatus_enum as shared_subscriptionstatus_enum


@dataclass_json
@dataclasses.dataclass
class Topic:
    r"""Topic
    An interest group, theme, or label within a list. Lists can have multiple topics.
    """
    
    default_subscription_status: shared_subscriptionstatus_enum.SubscriptionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubscriptionStatus') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    topic_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
