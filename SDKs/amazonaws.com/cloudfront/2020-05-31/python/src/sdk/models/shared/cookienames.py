import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CookieNames:
    r"""CookieNames
    Contains a list of cookie names.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
