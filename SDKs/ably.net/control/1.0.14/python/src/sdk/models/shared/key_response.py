import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KeyResponseCapabilityEnum(str, Enum):
    PUBLISH = "publish"
    SUBSCRIBE = "subscribe"
    HISTORY = "history"
    PRESENCE = "presence"
    CHANNEL_METADATA = "channel-metadata"
    PUSH_ADMIN = "push-admin"
    PUSH_SUBSCRIBE = "push-subscribe"
    STATISTICS = "statistics"


@dataclass_json
@dataclasses.dataclass
class KeyResponse:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    capability: Optional[dict[str, list[KeyResponseCapabilityEnum]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    created: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    modified: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
