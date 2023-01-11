import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification


@dataclass_json
@dataclasses.dataclass
class WorkspaceCreate:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    anonymous_data_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymousDataCollection') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    news: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('news') }})
    notifications: Optional[list[shared_notification.Notification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    security_updates: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdates') }})
    
