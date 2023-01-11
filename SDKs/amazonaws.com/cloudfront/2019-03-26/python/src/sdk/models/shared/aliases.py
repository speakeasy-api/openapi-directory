import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Aliases:
    r"""Aliases
    A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. 
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
