import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcSecurityGroupMembership:
    r"""VpcSecurityGroupMembership
    Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
    """
    
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    vpc_security_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroupId') }})
    
