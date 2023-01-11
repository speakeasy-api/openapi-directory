import dataclasses
from typing import Optional
from ..shared import globalreplicationgroup as shared_globalreplicationgroup


@dataclasses.dataclass
class DisassociateGlobalReplicationGroupResult:
    global_replication_group: Optional[shared_globalreplicationgroup.GlobalReplicationGroup] = dataclasses.field(default=None)
    
