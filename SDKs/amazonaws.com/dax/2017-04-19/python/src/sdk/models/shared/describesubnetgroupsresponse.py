import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subnetgroup as shared_subnetgroup


@dataclass_json
@dataclasses.dataclass
class DescribeSubnetGroupsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    subnet_groups: Optional[list[shared_subnetgroup.SubnetGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroups') }})
    
