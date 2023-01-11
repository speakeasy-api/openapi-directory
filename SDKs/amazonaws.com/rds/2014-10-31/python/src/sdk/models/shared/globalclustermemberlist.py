import dataclasses
from typing import Optional
from enum import Enum
from ..shared import writeforwardingstatus_enum as shared_writeforwardingstatus_enum


@dataclasses.dataclass
class GlobalClusterMemberList:
    r"""GlobalClusterMemberList
     A data structure with information about any primary and secondary clusters associated with an Aurora global database. 
    """
    
    db_cluster_arn: Optional[str] = dataclasses.field(default=None)
    global_write_forwarding_status: Optional[shared_writeforwardingstatus_enum.WriteForwardingStatusEnum] = dataclasses.field(default=None)
    is_writer: Optional[bool] = dataclasses.field(default=None)
    readers: Optional[list[str]] = dataclasses.field(default=None)
    
