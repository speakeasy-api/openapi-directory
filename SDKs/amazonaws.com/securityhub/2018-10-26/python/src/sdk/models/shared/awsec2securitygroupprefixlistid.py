import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEc2SecurityGroupPrefixListID:
    r"""AwsEc2SecurityGroupPrefixListID
    A prefix list ID.
    """
    
    prefix_list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrefixListId') }})
    
