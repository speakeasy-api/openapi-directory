import dataclasses
from typing import Optional


@dataclasses.dataclass
class CacheSecurityGroupMembershipList:
    r"""CacheSecurityGroupMembershipList
    Represents a cluster's status within a particular cache security group.
    """
    
    cache_security_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
