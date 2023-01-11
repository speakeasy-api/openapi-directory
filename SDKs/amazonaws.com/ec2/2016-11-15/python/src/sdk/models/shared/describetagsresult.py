import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTagsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
