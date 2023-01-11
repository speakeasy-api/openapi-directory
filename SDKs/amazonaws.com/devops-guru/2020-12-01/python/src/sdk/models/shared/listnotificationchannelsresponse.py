import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationchannel as shared_notificationchannel


@dataclass_json
@dataclasses.dataclass
class ListNotificationChannelsResponse:
    channels: Optional[list[shared_notificationchannel.NotificationChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channels') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
