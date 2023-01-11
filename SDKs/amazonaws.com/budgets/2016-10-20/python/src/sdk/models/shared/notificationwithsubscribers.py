import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification
from ..shared import subscriber as shared_subscriber


@dataclass_json
@dataclasses.dataclass
class NotificationWithSubscribers:
    r"""NotificationWithSubscribers
    A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
    """
    
    notification: shared_notification.Notification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    subscribers: list[shared_subscriber.Subscriber] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    
