import dataclasses
from typing import Optional
from ..shared import replicationgroup as shared_replicationgroup


@dataclasses.dataclass
class CompleteMigrationResponse:
    replication_group: Optional[shared_replicationgroup.ReplicationGroup] = dataclasses.field(default=None)
    
