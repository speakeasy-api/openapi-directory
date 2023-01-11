import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeIDFormatResult:
    statuses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
