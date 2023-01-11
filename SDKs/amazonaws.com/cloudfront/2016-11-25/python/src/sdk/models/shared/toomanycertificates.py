import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyCertificates:
    r"""TooManyCertificates
    You cannot create anymore custom SSL/TLS certificates.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
