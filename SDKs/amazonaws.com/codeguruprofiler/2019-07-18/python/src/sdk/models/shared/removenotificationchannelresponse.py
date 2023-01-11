import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationconfiguration as shared_notificationconfiguration


@dataclass_json
@dataclasses.dataclass
class RemoveNotificationChannelResponse:
    r"""RemoveNotificationChannelResponse
    The structure representing the RemoveNotificationChannelResponse.
    """
    
    notification_configuration: Optional[shared_notificationconfiguration.NotificationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfiguration') }})
    
