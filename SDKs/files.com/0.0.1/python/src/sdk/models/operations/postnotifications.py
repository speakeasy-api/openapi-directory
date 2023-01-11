import dataclasses
from typing import Optional
from ..shared import notificationentity as shared_notificationentity


@dataclasses.dataclass
class PostNotificationsRequestBody:
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    notify_on_copy: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notify_on_copy' }})
    notify_user_actions: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notify_user_actions' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    recursive: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    send_interval: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'send_interval' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class PostNotificationsRequest:
    request: Optional[PostNotificationsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostNotificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_entity: Optional[shared_notificationentity.NotificationEntity] = dataclasses.field(default=None)
    
