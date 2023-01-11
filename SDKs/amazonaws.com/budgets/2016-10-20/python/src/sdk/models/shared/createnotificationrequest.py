import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification
from ..shared import subscriber as shared_subscriber


@dataclass_json
@dataclasses.dataclass
class CreateNotificationRequest:
    r"""CreateNotificationRequest
     Request of CreateNotification 
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    notification: shared_notification.Notification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    subscribers: list[shared_subscriber.Subscriber] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    
