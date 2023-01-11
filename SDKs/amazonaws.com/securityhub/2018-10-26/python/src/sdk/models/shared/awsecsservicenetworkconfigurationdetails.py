import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecsservicenetworkconfigurationawsvpcconfigurationdetails as shared_awsecsservicenetworkconfigurationawsvpcconfigurationdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsServiceNetworkConfigurationDetails:
    r"""AwsEcsServiceNetworkConfigurationDetails
    For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
    """
    
    aws_vpc_configuration: Optional[shared_awsecsservicenetworkconfigurationawsvpcconfigurationdetails.AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsVpcConfiguration') }})
    
