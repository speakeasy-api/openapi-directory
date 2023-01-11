import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetErc20Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
