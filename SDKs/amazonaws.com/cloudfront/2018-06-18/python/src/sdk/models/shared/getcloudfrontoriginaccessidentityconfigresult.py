import dataclasses
from typing import Optional
from ..shared import cloudfrontoriginaccessidentityconfig as shared_cloudfrontoriginaccessidentityconfig


@dataclasses.dataclass
class GetCloudFrontOriginAccessIdentityConfigResult:
    r"""GetCloudFrontOriginAccessIdentityConfigResult
    The returned result of the corresponding request.
    """
    
    cloud_front_origin_access_identity_config: Optional[shared_cloudfrontoriginaccessidentityconfig.CloudFrontOriginAccessIdentityConfig] = dataclasses.field(default=None)
    
