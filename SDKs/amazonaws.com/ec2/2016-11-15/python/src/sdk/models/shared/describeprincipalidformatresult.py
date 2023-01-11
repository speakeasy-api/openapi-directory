import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribePrincipalIDFormatResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    principals: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
