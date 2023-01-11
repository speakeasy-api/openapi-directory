import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeImagesResult:
    images: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
