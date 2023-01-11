import dataclasses
from typing import Optional


@dataclasses.dataclass
class VpcSecurityGroupMembershipList:
    r"""VpcSecurityGroupMembershipList
    Used as a response element for queries on virtual private cloud (VPC) security group membership.
    """
    
    status: Optional[str] = dataclasses.field(default=None)
    vpc_security_group_id: Optional[str] = dataclasses.field(default=None)
    
