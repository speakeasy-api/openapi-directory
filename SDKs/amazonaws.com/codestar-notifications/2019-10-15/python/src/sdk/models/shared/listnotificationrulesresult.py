import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationrulesummary as shared_notificationrulesummary


@dataclass_json
@dataclasses.dataclass
class ListNotificationRulesResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    notification_rules: Optional[list[shared_notificationrulesummary.NotificationRuleSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationRules') }})
    
