import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeRegionsResult:
    regions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
