import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails:
    r"""AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
    For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
    """
    
    assign_public_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignPublicIp') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    subnets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    
