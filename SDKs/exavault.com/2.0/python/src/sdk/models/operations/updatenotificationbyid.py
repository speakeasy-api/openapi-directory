import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationresponse as shared_notificationresponse


@dataclasses.dataclass
class UpdateNotificationByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateNotificationByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    
class UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum(str, Enum):
    UPLOAD = "upload"
    DOWNLOAD = "download"
    DELETE = "delete"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class UpdateNotificationByIDUpdateNotificationByIDRequestBody:
    action: Optional[UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    recipients: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    send_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendEmail') }})
    usernames: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernames') }})
    

@dataclasses.dataclass
class UpdateNotificationByIDRequest:
    headers: UpdateNotificationByIDHeaders = dataclasses.field()
    path_params: UpdateNotificationByIDPathParams = dataclasses.field()
    request: Optional[UpdateNotificationByIDUpdateNotificationByIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNotificationByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_response: Optional[shared_notificationresponse.NotificationResponse] = dataclasses.field(default=None)
    
