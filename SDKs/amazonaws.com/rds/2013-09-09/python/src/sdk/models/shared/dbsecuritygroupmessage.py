import dataclasses
from typing import Optional
from ..shared import dbsecuritygroups as shared_dbsecuritygroups


@dataclasses.dataclass
class DbSecurityGroupMessage:
    db_security_groups: Optional[list[shared_dbsecuritygroups.DbSecurityGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
