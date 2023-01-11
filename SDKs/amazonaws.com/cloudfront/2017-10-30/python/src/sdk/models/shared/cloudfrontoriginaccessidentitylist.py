import dataclasses
from typing import Optional
from ..shared import cloudfrontoriginaccessidentitysummarylist as shared_cloudfrontoriginaccessidentitysummarylist


@dataclasses.dataclass
class CloudFrontOriginAccessIdentityList:
    r"""CloudFrontOriginAccessIdentityList
    Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.
    """
    
    is_truncated: bool = dataclasses.field()
    marker: str = dataclasses.field()
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_cloudfrontoriginaccessidentitysummarylist.CloudFrontOriginAccessIdentitySummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
