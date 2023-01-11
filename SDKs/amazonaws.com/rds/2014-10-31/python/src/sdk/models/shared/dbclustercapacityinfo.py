import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterCapacityInfo:
    current_capacity: Optional[int] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    pending_capacity: Optional[int] = dataclasses.field(default=None)
    seconds_before_timeout: Optional[int] = dataclasses.field(default=None)
    timeout_action: Optional[str] = dataclasses.field(default=None)
    
