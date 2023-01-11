import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationspecification as shared_notificationspecification


@dataclass_json
@dataclasses.dataclass
class UpdateNotificationSettingsRequest:
    hit_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITTypeId') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    notification: Optional[shared_notificationspecification.NotificationSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    
