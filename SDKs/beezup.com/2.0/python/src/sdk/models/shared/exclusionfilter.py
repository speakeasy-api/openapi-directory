import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExclusionFilter:
    r"""ExclusionFilter
    The exclusion filter
    """
    
    channel_column_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelColumnId') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    position: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    position_in_group: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionInGroup') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
