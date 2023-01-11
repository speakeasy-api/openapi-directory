import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class KeyPairIds:
    r"""KeyPairIds
    A list of CloudFront key pair identifiers.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
