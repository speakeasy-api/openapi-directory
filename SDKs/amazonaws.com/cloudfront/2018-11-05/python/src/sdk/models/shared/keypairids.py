import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class KeyPairIds:
    r"""KeyPairIds
    <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p>
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
