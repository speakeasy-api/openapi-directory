import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyCloudFrontOriginAccessIdentities:
    r"""TooManyCloudFrontOriginAccessIdentities
    Processing your request would cause you to exceed the maximum number of origin access identities allowed.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
