import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification


@dataclass_json
@dataclasses.dataclass
class DescribeSubscribersForNotificationRequest:
    r"""DescribeSubscribersForNotificationRequest
     Request of DescribeSubscribersForNotification 
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    notification: shared_notification.Notification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
