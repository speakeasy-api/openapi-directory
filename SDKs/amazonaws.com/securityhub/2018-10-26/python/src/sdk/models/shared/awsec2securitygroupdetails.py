import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2securitygroupippermission as shared_awsec2securitygroupippermission


@dataclass_json
@dataclasses.dataclass
class AwsEc2SecurityGroupDetails:
    r"""AwsEc2SecurityGroupDetails
    Details about an EC2 security group.
    """
    
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    ip_permissions: Optional[list[shared_awsec2securitygroupippermission.AwsEc2SecurityGroupIPPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpPermissions') }})
    ip_permissions_egress: Optional[list[shared_awsec2securitygroupippermission.AwsEc2SecurityGroupIPPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpPermissionsEgress') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
