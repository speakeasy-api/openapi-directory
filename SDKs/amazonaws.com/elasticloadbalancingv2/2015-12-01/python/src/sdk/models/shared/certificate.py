import dataclasses
from typing import Optional


@dataclasses.dataclass
class Certificate:
    r"""Certificate
    Information about an SSL server certificate.
    """
    
    certificate_arn: Optional[str] = dataclasses.field(default=None)
    is_default: Optional[bool] = dataclasses.field(default=None)
    
