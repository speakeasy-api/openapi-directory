import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterOptionGroupMemberships:
    r"""DbClusterOptionGroupMemberships
    Not supported by Neptune.
    """
    
    db_cluster_option_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
