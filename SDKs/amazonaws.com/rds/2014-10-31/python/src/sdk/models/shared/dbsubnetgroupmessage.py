import dataclasses
from typing import Optional
from ..shared import dbsubnetgroups as shared_dbsubnetgroups


@dataclasses.dataclass
class DbSubnetGroupMessage:
    r"""DbSubnetGroupMessage
     Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. 
    """
    
    db_subnet_groups: Optional[list[shared_dbsubnetgroups.DbSubnetGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
