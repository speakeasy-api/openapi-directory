import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationresponse as shared_notificationresponse


@dataclasses.dataclass
class AddNotificationHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    
class AddNotificationAddNotificationRequestBodyActionEnum(str, Enum):
    UPLOAD = "upload"
    DOWNLOAD = "download"
    DELETE = "delete"
    ALL = "all"

class AddNotificationAddNotificationRequestBodyTypeEnum(str, Enum):
    FILE = "file"
    FOLDER = "folder"


@dataclass_json
@dataclasses.dataclass
class AddNotificationAddNotificationRequestBody:
    action: AddNotificationAddNotificationRequestBodyActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    send_email: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendEmail') }})
    type: AddNotificationAddNotificationRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usernames: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernames') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    recipients: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    

@dataclasses.dataclass
class AddNotificationRequest:
    headers: AddNotificationHeaders = dataclasses.field()
    request: Optional[AddNotificationAddNotificationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_response: Optional[shared_notificationresponse.NotificationResponse] = dataclasses.field(default=None)
    
