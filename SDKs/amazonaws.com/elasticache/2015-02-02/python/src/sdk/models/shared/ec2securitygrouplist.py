import dataclasses
from typing import Optional


@dataclasses.dataclass
class Ec2SecurityGroupList:
    r"""Ec2SecurityGroupList
    Provides ownership and status information for an Amazon EC2 security group.
    """
    
    ec2_security_group_name: Optional[str] = dataclasses.field(default=None)
    ec2_security_group_owner_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
