import dataclasses
from typing import Optional


@dataclasses.dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
    """
    
    topic_arn: Optional[str] = dataclasses.field(default=None)
    topic_status: Optional[str] = dataclasses.field(default=None)
    
