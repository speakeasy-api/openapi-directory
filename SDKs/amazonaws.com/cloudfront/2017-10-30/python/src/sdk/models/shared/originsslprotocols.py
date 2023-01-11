import dataclasses
from typing import Any


@dataclasses.dataclass
class OriginSslProtocols:
    r"""OriginSslProtocols
    A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
    """
    
    items: list[dict[str, Any]] = dataclasses.field()
    quantity: int = dataclasses.field()
    
