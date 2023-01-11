import dataclasses
from typing import Optional
from ..shared import notificationconfiguration as shared_notificationconfiguration


@dataclasses.dataclass
class DescribeNotificationConfigurationsAnswer:
    notification_configurations: list[shared_notificationconfiguration.NotificationConfiguration] = dataclasses.field()
    next_token: Optional[str] = dataclasses.field(default=None)
    
