import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GroupMappingGroups:
    group_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    synced_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synced_at') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupMapping:
    r"""GroupMapping
    External Groups to be mapped to a team for membership
    """
    
    groups: Optional[list[GroupMappingGroups]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
