import dataclasses
from typing import Optional
from enum import Enum
from ..shared import automaticfailoverstatus_enum as shared_automaticfailoverstatus_enum


@dataclasses.dataclass
class GlobalReplicationGroupMemberList:
    r"""GlobalReplicationGroupMemberList
    A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group. 
    """
    
    automatic_failover: Optional[shared_automaticfailoverstatus_enum.AutomaticFailoverStatusEnum] = dataclasses.field(default=None)
    replication_group_id: Optional[str] = dataclasses.field(default=None)
    replication_group_region: Optional[str] = dataclasses.field(default=None)
    role: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
