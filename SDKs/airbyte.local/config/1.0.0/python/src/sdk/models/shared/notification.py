import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationtype_enum as shared_notificationtype_enum
from ..shared import slacknotificationconfiguration as shared_slacknotificationconfiguration


@dataclass_json
@dataclasses.dataclass
class Notification:
    notification_type: shared_notificationtype_enum.NotificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    slack_configuration: Optional[shared_slacknotificationconfiguration.SlackNotificationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slackConfiguration') }})
    
