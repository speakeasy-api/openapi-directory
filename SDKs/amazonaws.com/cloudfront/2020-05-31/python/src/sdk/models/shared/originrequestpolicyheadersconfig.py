import dataclasses
from typing import Optional
from enum import Enum
from ..shared import originrequestpolicyheaderbehavior_enum as shared_originrequestpolicyheaderbehavior_enum
from ..shared import headers as shared_headers


@dataclasses.dataclass
class OriginRequestPolicyHeadersConfig:
    r"""OriginRequestPolicyHeadersConfig
    An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
    """
    
    header_behavior: shared_originrequestpolicyheaderbehavior_enum.OriginRequestPolicyHeaderBehaviorEnum = dataclasses.field()
    headers: Optional[shared_headers.Headers] = dataclasses.field(default=None)
    
