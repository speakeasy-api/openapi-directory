import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventpublisher_enum as shared_eventpublisher_enum


@dataclass_json
@dataclasses.dataclass
class Channel:
    r"""Channel
    Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
    """
    
    event_publishers: list[shared_eventpublisher_enum.EventPublisherEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPublishers') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
