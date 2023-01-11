import dataclasses
from typing import Optional


@dataclasses.dataclass
class IdentityNotificationAttributes:
    bounce_topic: Optional[str] = dataclasses.field(default=None)
    complaint_topic: Optional[str] = dataclasses.field(default=None)
    delivery_topic: Optional[str] = dataclasses.field(default=None)
    forwarding_enabled: Optional[bool] = dataclasses.field(default=None)
    headers_in_bounce_notifications_enabled: Optional[bool] = dataclasses.field(default=None)
    headers_in_complaint_notifications_enabled: Optional[bool] = dataclasses.field(default=None)
    headers_in_delivery_notifications_enabled: Optional[bool] = dataclasses.field(default=None)
    
