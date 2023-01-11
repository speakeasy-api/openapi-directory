import dataclasses
from typing import Optional


@dataclasses.dataclass
class PendingModifiedValues:
    r"""PendingModifiedValues
    Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
    """
    
    automated_snapshot_retention_period: Optional[int] = dataclasses.field(default=None)
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    cluster_type: Optional[str] = dataclasses.field(default=None)
    cluster_version: Optional[str] = dataclasses.field(default=None)
    encryption_type: Optional[str] = dataclasses.field(default=None)
    enhanced_vpc_routing: Optional[bool] = dataclasses.field(default=None)
    maintenance_track_name: Optional[str] = dataclasses.field(default=None)
    master_user_password: Optional[str] = dataclasses.field(default=None)
    node_type: Optional[str] = dataclasses.field(default=None)
    number_of_nodes: Optional[int] = dataclasses.field(default=None)
    publicly_accessible: Optional[bool] = dataclasses.field(default=None)
    
