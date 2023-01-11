import dataclasses
from typing import Optional
from ..shared import dbsecuritygroup as shared_dbsecuritygroup


@dataclasses.dataclass
class CreateDbSecurityGroupResult:
    db_security_group: Optional[shared_dbsecuritygroup.DbSecurityGroup] = dataclasses.field(default=None)
    
