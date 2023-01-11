import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2networkinterfaceviolation as shared_awsec2networkinterfaceviolation


@dataclass_json
@dataclasses.dataclass
class AwsEc2InstanceViolation:
    r"""AwsEc2InstanceViolation
    Violation detail for an EC2 instance resource.
    """
    
    aws_ec2_network_interface_violations: Optional[list[shared_awsec2networkinterfaceviolation.AwsEc2NetworkInterfaceViolation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkInterfaceViolations') }})
    violation_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
