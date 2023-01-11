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
class WorkspaceUpdate:
    anonymous_data_collection: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymousDataCollection') }})
    initial_setup_complete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSetupComplete') }})
    news: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('news') }})
    security_updates: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdates') }})
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    display_setup_wizard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displaySetupWizard') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    notifications: Optional[list[shared_notification.Notification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    
