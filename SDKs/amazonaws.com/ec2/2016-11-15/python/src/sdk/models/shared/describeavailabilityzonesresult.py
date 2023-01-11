import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeAvailabilityZonesResult:
    availability_zones: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
