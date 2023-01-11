import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeAggregateIDFormatResult:
    statuses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    use_long_ids_aggregated: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
