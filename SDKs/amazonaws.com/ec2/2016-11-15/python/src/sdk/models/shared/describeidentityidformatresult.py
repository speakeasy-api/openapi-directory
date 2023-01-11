import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeIdentityIDFormatResult:
    statuses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
