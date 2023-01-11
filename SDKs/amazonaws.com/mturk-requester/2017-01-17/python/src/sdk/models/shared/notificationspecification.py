import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import notificationtransport_enum as shared_notificationtransport_enum


@dataclass_json
@dataclasses.dataclass
class NotificationSpecification:
    r"""NotificationSpecification
    The NotificationSpecification data structure describes a HIT event notification for a HIT type.
    """
    
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    event_types: list[shared_eventtype_enum.EventTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTypes') }})
    transport: shared_notificationtransport_enum.NotificationTransportEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transport') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
