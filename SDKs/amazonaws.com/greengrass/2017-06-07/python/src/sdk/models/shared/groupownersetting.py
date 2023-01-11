import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GroupOwnerSetting:
    r"""GroupOwnerSetting
    Group owner related settings for local resources.
    """
    
    auto_add_group_owner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAddGroupOwner') }})
    group_owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupOwner') }})
    
