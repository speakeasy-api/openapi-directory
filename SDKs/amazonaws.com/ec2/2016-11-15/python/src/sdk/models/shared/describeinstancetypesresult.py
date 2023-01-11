import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeInstanceTypesResult:
    instance_types: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
