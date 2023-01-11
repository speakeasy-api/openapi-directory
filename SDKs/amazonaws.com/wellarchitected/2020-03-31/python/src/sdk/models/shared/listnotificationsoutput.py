import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationsummary as shared_notificationsummary


@dataclass_json
@dataclasses.dataclass
class ListNotificationsOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    notification_summaries: Optional[list[shared_notificationsummary.NotificationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationSummaries') }})
    
