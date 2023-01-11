import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcClassicLinkResult:
    vpcs: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
