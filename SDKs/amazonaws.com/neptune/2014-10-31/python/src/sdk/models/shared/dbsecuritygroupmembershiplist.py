import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbSecurityGroupMembershipList:
    r"""DbSecurityGroupMembershipList
    Specifies membership in a designated DB security group.
    """
    
    db_security_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
