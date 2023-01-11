import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class TrustedSigners:
    r"""TrustedSigners
    A list of accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
