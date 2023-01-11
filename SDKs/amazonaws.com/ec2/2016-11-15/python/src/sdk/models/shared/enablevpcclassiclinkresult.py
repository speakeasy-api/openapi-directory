import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EnableVpcClassicLinkResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
