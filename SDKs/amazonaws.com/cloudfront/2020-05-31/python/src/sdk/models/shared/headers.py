import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Headers:
    r"""Headers
    Contains a list of HTTP header names.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
