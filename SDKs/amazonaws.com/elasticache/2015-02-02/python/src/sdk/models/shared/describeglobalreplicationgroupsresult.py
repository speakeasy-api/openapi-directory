import dataclasses
from typing import Optional
from ..shared import globalreplicationgrouplist as shared_globalreplicationgrouplist


@dataclasses.dataclass
class DescribeGlobalReplicationGroupsResult:
    global_replication_groups: Optional[list[shared_globalreplicationgrouplist.GlobalReplicationGroupList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
