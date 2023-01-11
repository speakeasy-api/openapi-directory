import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GroupedResourceCount:
    r"""GroupedResourceCount
    The count of resources that are grouped by the group name.
    """
    
    group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    resource_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCount') }})
    
