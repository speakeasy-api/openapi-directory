import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2tagset as shared_ec2tagset
from ..shared import ec2tagfilter as shared_ec2tagfilter


@dataclass_json
@dataclasses.dataclass
class TargetInstances:
    r"""TargetInstances
    Information about the instances to be used in the replacement environment in a blue/green deployment.
    """
    
    auto_scaling_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    ec2_tag_set: Optional[shared_ec2tagset.Ec2TagSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagSet') }})
    tag_filters: Optional[list[shared_ec2tagfilter.Ec2TagFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilters') }})
    
