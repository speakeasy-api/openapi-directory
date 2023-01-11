import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsRedshiftClusterVpcSecurityGroup:
    r"""AwsRedshiftClusterVpcSecurityGroup
    A VPC security group that the cluster belongs to, if the cluster is in a VPC.
    """
    
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    vpc_security_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroupId') }})
    
