import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSecurityGroupReferencesResult:
    security_group_reference_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
