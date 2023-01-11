import dataclasses
from typing import Optional


@dataclasses.dataclass
class VpcSecurityGroupMembershipList:
    r"""VpcSecurityGroupMembershipList
    Describes the members of a VPC security group.
    """
    
    status: Optional[str] = dataclasses.field(default=None)
    vpc_security_group_id: Optional[str] = dataclasses.field(default=None)
    
