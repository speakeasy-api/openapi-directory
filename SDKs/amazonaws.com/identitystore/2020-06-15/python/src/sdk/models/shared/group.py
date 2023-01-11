import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Group:
    r"""Group
    A group object, which contains a specified group’s metadata and attributes.
    """
    
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    
