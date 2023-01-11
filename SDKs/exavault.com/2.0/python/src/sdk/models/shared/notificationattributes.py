import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationrecipient as shared_notificationrecipient

class NotificationAttributesActionEnum(str, Enum):
    UPLOAD = "upload"
    DOWNLOAD = "download"
    DELETE = "delete"
    ALL = "all"

class NotificationAttributesTypeEnum(str, Enum):
    FILE = "file"
    FOLDER = "folder"
    SHARED_FOLDER = "shared_folder"
    SEND_RECEIPT = "send_receipt"
    SHARE_RECEIPT = "share_receipt"
    FILE_DROP = "file_drop"


@dataclass_json
@dataclasses.dataclass
class NotificationAttributes:
    r"""NotificationAttributes
    Attributes for the notification including the path, recipients, and share data. 
    """
    
    action: Optional[NotificationAttributesActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    modified: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    readable_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readableDescription') }})
    readable_description_without_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readableDescriptionWithoutPath') }})
    recipients: Optional[list[shared_notificationrecipient.NotificationRecipient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    send_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendEmail') }})
    share_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareId') }})
    type: Optional[NotificationAttributesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    usernames: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernames') }})
    
