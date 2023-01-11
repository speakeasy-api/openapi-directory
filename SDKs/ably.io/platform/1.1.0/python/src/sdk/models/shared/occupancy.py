import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Occupancy:
    r"""Occupancy
    An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
    """
    
    presence_connections: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presenceConnections') }})
    presence_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presenceMembers') }})
    presence_subscribers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presenceSubscribers') }})
    publishers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishers') }})
    subscribers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers') }})
    
