import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateVpcEndpointConnectionNotificationResultConnectionNotification:
    r"""CreateVpcEndpointConnectionNotificationResultConnectionNotification
    Information about the notification.
    """
    
    connection_events: Optional[dict[str, Any]] = dataclasses.field(default=None)
    connection_notification_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    connection_notification_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    connection_notification_state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    connection_notification_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_endpoint_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVpcEndpointConnectionNotificationResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    connection_notification: Optional[CreateVpcEndpointConnectionNotificationResultConnectionNotification] = dataclasses.field(default=None)
    
