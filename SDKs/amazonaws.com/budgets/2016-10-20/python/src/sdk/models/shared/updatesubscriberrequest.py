import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriber as shared_subscriber
from ..shared import notification as shared_notification


@dataclass_json
@dataclasses.dataclass
class UpdateSubscriberRequest:
    r"""UpdateSubscriberRequest
     Request of UpdateSubscriber 
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    new_subscriber: shared_subscriber.Subscriber = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewSubscriber') }})
    notification: shared_notification.Notification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    old_subscriber: shared_subscriber.Subscriber = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OldSubscriber') }})
    
