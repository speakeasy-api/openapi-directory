import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class FieldPatterns:
    r"""FieldPatterns
    A complex data type that includes the field patterns to match for field-level encryption.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
