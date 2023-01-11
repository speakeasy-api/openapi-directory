import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeFleetInstancesResult:
    active_instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fleet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
