import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbSecurityGroupMembershipList:
    db_security_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
