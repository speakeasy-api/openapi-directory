import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcDestinationConfiguration:
    r"""VpcDestinationConfiguration
    The configuration information for a virtual private cloud (VPC) destination.
    """
    
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    subnet_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetIds') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcId') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
