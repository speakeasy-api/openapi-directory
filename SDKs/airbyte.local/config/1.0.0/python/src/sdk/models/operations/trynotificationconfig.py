import dataclasses
from typing import Optional
from ..shared import notification as shared_notification
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import notificationread as shared_notificationread


@dataclasses.dataclass
class TryNotificationConfigRequest:
    request: shared_notification.Notification = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TryNotificationConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    notification_read: Optional[shared_notificationread.NotificationRead] = dataclasses.field(default=None)
    
