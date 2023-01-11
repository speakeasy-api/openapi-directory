import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterSecurityGroupMembershipList:
    r"""ClusterSecurityGroupMembershipList
    Describes a cluster security group.
    """
    
    cluster_security_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
