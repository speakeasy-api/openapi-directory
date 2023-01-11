import dataclasses
from typing import Optional


@dataclasses.dataclass
class VpcSecurityGroupMembershipList:
    status: Optional[str] = dataclasses.field(default=None)
    vpc_security_group_id: Optional[str] = dataclasses.field(default=None)
    
