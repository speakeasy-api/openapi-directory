import dataclasses
from typing import Optional
from enum import Enum
from ..shared import failoverstatus_enum as shared_failoverstatus_enum


@dataclasses.dataclass
class FailoverState:
    r"""FailoverState
    Contains the state of scheduled or in-process failover operations on an Aurora global database (<a>GlobalCluster</a>). This Data type is empty unless a failover operation is scheduled or is currently underway on the Aurora global database. 
    """
    
    from_db_cluster_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_failoverstatus_enum.FailoverStatusEnum] = dataclasses.field(default=None)
    to_db_cluster_arn: Optional[str] = dataclasses.field(default=None)
    
