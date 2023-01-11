import dataclasses
from typing import Optional


@dataclasses.dataclass
class VpcSecurityGroupMembershipList:
    r"""VpcSecurityGroupMembershipList
    This data type is used as a response element for queries on VPC security group membership.
    """
    
    status: Optional[str] = dataclasses.field(default=None)
    vpc_security_group_id: Optional[str] = dataclasses.field(default=None)
    
