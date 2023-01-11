import dataclasses
from typing import Optional
from ..shared import notificationentity as shared_notificationentity


@dataclasses.dataclass
class PatchNotificationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchNotificationsIDRequestBody:
    notify_on_copy: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notify_on_copy' }})
    notify_user_actions: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notify_user_actions' }})
    recursive: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    send_interval: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'send_interval' }})
    

@dataclasses.dataclass
class PatchNotificationsIDRequest:
    path_params: PatchNotificationsIDPathParams = dataclasses.field()
    request: Optional[PatchNotificationsIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchNotificationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_entity: Optional[shared_notificationentity.NotificationEntity] = dataclasses.field(default=None)
    
