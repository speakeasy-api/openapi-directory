import dataclasses
from typing import Optional
from ..shared import dbsecuritygroups as shared_dbsecuritygroups


@dataclasses.dataclass
class DbSecurityGroupMessage:
    r"""DbSecurityGroupMessage
     Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action. 
    """
    
    db_security_groups: Optional[list[shared_dbsecuritygroups.DbSecurityGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
