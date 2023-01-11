import dataclasses
from typing import Optional
from ..shared import replicationgrouplist as shared_replicationgrouplist


@dataclasses.dataclass
class ReplicationGroupMessage:
    r"""ReplicationGroupMessage
    Represents the output of a <code>DescribeReplicationGroups</code> operation.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    replication_groups: Optional[list[shared_replicationgrouplist.ReplicationGroupList]] = dataclasses.field(default=None)
    
