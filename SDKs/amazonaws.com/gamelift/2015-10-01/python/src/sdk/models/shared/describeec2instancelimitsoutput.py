import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2instancelimit as shared_ec2instancelimit


@dataclass_json
@dataclasses.dataclass
class DescribeEc2InstanceLimitsOutput:
    r"""DescribeEc2InstanceLimitsOutput
    Represents the returned data in response to a request operation.
    """
    
    ec2_instance_limits: Optional[list[shared_ec2instancelimit.Ec2InstanceLimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceLimits') }})
    
