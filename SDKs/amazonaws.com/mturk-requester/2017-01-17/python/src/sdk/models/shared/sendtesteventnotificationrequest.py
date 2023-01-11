import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationspecification as shared_notificationspecification
from ..shared import eventtype_enum as shared_eventtype_enum


@dataclass_json
@dataclasses.dataclass
class SendTestEventNotificationRequest:
    notification: shared_notificationspecification.NotificationSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    test_event_type: shared_eventtype_enum.EventTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestEventType') }})
    
