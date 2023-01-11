import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeAccountAttributesResult:
    account_attributes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
