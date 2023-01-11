import dataclasses
from typing import Optional
from ..shared import cloudfrontoriginaccessidentity as shared_cloudfrontoriginaccessidentity


@dataclasses.dataclass
class CreateCloudFrontOriginAccessIdentityResult:
    r"""CreateCloudFrontOriginAccessIdentityResult
    The returned result of the corresponding request.
    """
    
    cloud_front_origin_access_identity: Optional[shared_cloudfrontoriginaccessidentity.CloudFrontOriginAccessIdentity] = dataclasses.field(default=None)
    
