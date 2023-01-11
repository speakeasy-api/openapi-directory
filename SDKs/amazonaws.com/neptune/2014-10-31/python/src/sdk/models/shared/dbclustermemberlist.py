import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterMemberList:
    r"""DbClusterMemberList
    Contains information about an instance that is part of a DB cluster.
    """
    
    db_cluster_parameter_group_status: Optional[str] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    is_cluster_writer: Optional[bool] = dataclasses.field(default=None)
    promotion_tier: Optional[int] = dataclasses.field(default=None)
    
