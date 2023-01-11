import dataclasses
from typing import Optional
from ..shared import failoverstate as shared_failoverstate
from ..shared import globalclustermemberlist as shared_globalclustermemberlist


@dataclasses.dataclass
class GlobalCluster:
    r"""GlobalCluster
    A data type representing an Aurora global database.
    """
    
    database_name: Optional[str] = dataclasses.field(default=None)
    deletion_protection: Optional[bool] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    failover_state: Optional[shared_failoverstate.FailoverState] = dataclasses.field(default=None)
    global_cluster_arn: Optional[str] = dataclasses.field(default=None)
    global_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    global_cluster_members: Optional[list[shared_globalclustermemberlist.GlobalClusterMemberList]] = dataclasses.field(default=None)
    global_cluster_resource_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    storage_encrypted: Optional[bool] = dataclasses.field(default=None)
    
