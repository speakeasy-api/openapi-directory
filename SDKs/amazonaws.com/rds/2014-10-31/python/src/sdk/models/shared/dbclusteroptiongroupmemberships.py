import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterOptionGroupMemberships:
    r"""DbClusterOptionGroupMemberships
    Contains status information for a DB cluster option group.
    """
    
    db_cluster_option_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
