import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class QueryStringNames:
    r"""QueryStringNames
    Contains a list of query string names.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
