import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budget as shared_budget
from ..shared import notificationwithsubscribers as shared_notificationwithsubscribers


@dataclass_json
@dataclasses.dataclass
class CreateBudgetRequest:
    r"""CreateBudgetRequest
     Request of CreateBudget 
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget: shared_budget.Budget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budget') }})
    notifications_with_subscribers: Optional[list[shared_notificationwithsubscribers.NotificationWithSubscribers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationsWithSubscribers') }})
    
