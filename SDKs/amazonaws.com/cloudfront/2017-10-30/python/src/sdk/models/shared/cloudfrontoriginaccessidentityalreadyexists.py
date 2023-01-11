import dataclasses
from typing import Optional


@dataclasses.dataclass
class CloudFrontOriginAccessIdentityAlreadyExists:
    r"""CloudFrontOriginAccessIdentityAlreadyExists
    If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. 
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
