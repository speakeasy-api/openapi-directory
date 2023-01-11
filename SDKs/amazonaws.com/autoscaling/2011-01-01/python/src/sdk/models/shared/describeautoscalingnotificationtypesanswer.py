import dataclasses
from typing import Optional


@dataclasses.dataclass
class DescribeAutoScalingNotificationTypesAnswer:
    auto_scaling_notification_types: Optional[list[str]] = dataclasses.field(default=None)
    
