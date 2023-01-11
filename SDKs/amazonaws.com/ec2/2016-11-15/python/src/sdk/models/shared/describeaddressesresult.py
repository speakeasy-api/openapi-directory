import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeAddressesResult:
    addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
