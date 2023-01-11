import dataclasses
from typing import Optional
from ..shared import cloudfrontoriginaccessidentitylist as shared_cloudfrontoriginaccessidentitylist


@dataclasses.dataclass
class ListCloudFrontOriginAccessIdentitiesResult:
    r"""ListCloudFrontOriginAccessIdentitiesResult
    The returned result of the corresponding request. 
    """
    
    cloud_front_origin_access_identity_list: Optional[shared_cloudfrontoriginaccessidentitylist.CloudFrontOriginAccessIdentityList] = dataclasses.field(default=None)
    
