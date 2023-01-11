import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2instancetype_enum as shared_ec2instancetype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeEc2InstanceLimitsInput:
    r"""DescribeEc2InstanceLimitsInput
    Represents the input for a request operation.
    """
    
    ec2_instance_type: Optional[shared_ec2instancetype_enum.Ec2InstanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceType') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
