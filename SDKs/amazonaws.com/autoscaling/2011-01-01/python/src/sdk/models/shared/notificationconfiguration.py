import dataclasses
from typing import Optional


@dataclasses.dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    Describes a notification.
    """
    
    auto_scaling_group_name: Optional[str] = dataclasses.field(default=None)
    notification_type: Optional[str] = dataclasses.field(default=None)
    topic_arn: Optional[str] = dataclasses.field(default=None)
    
