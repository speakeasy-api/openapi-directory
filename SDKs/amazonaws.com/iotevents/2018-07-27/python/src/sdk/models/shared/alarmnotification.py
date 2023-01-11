import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationaction as shared_notificationaction


@dataclass_json
@dataclasses.dataclass
class AlarmNotification:
    r"""AlarmNotification
    Contains information about one or more notification actions.
    """
    
    notification_actions: Optional[list[shared_notificationaction.NotificationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationActions') }})
    
