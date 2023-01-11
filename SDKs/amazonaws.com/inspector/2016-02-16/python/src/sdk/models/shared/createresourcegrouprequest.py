import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcegrouptag as shared_resourcegrouptag


@dataclass_json
@dataclasses.dataclass
class CreateResourceGroupRequest:
    resource_group_tags: list[shared_resourcegrouptag.ResourceGroupTag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroupTags') }})
    
