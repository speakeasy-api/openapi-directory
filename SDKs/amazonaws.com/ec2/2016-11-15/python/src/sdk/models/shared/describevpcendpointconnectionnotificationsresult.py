import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcEndpointConnectionNotificationsResult:
    connection_notification_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
