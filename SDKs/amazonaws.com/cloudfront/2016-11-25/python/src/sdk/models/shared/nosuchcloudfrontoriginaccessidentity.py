import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchCloudFrontOriginAccessIdentity:
    r"""NoSuchCloudFrontOriginAccessIdentity
    The specified origin access identity does not exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
