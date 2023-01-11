import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KeyPostCapabilitiesEnum(str, Enum):
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
class KeyPost:
    capabilities: list[KeyPostCapabilitiesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    channels: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
