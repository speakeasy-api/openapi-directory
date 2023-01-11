import dataclasses
from typing import Optional
from ..shared import dbinstance as shared_dbinstance


@dataclasses.dataclass
class PromoteReadReplicaResult:
    db_instance: Optional[shared_dbinstance.DbInstance] = dataclasses.field(default=None)
    
