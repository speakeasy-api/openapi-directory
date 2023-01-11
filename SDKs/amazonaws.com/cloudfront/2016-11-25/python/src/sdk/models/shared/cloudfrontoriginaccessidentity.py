import dataclasses
from typing import Optional
from ..shared import cloudfrontoriginaccessidentityconfig as shared_cloudfrontoriginaccessidentityconfig


@dataclasses.dataclass
class CloudFrontOriginAccessIdentity:
    r"""CloudFrontOriginAccessIdentity
    CloudFront origin access identity.
    """
    
    id: str = dataclasses.field()
    s3_canonical_user_id: str = dataclasses.field()
    cloud_front_origin_access_identity_config: Optional[shared_cloudfrontoriginaccessidentityconfig.CloudFrontOriginAccessIdentityConfig] = dataclasses.field(default=None)
    
