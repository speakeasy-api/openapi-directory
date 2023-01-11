import dataclasses
from typing import Optional


@dataclasses.dataclass
class SecurityGroupMembership:
    r"""SecurityGroupMembership
    Represents a single cache security group and its status.
    """
    
    security_group_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
