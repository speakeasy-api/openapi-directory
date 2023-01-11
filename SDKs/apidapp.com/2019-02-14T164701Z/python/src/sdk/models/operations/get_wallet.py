import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetWalletResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
