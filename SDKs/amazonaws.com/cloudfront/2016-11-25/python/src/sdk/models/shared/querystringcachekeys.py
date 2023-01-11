import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class QueryStringCacheKeys:
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
