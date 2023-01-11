import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationcontext as shared_notificationcontext


@dataclass_json
@dataclasses.dataclass
class NotifyAppValidationOutputRequest:
    app_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    notification_context: Optional[shared_notificationcontext.NotificationContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationContext') }})
    
