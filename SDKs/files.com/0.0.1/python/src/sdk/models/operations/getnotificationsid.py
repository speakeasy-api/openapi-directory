import dataclasses
from typing import Optional
from ..shared import notificationentity as shared_notificationentity


@dataclasses.dataclass
class GetNotificationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNotificationsIDRequest:
    path_params: GetNotificationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNotificationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_entity: Optional[shared_notificationentity.NotificationEntity] = dataclasses.field(default=None)
    
