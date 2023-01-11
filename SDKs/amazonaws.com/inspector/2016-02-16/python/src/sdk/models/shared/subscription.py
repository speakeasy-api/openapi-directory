import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsubscription as shared_eventsubscription


@dataclass_json
@dataclasses.dataclass
class Subscription:
    r"""Subscription
    This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
    """
    
    event_subscriptions: list[shared_eventsubscription.EventSubscription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSubscriptions') }})
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    topic_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicArn') }})
    
