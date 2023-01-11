import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import occupancy as shared_occupancy


@dataclass_json
@dataclasses.dataclass
class ChannelStatus:
    r"""ChannelStatus
    A ChannelStatus instance.
    """
    
    is_active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    occupancy: Optional[shared_occupancy.Occupancy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupancy') }})
    
