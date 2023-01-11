import dataclasses
from typing import Optional


@dataclasses.dataclass
class CloudFrontOriginAccessIdentityInUse:
    message: Optional[str] = dataclasses.field(default=None)
    
