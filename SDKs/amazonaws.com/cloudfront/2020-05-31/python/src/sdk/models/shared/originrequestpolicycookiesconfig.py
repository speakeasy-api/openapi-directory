import dataclasses
from typing import Optional
from enum import Enum
from ..shared import originrequestpolicycookiebehavior_enum as shared_originrequestpolicycookiebehavior_enum
from ..shared import cookienames as shared_cookienames


@dataclasses.dataclass
class OriginRequestPolicyCookiesConfig:
    r"""OriginRequestPolicyCookiesConfig
    An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
    """
    
    cookie_behavior: shared_originrequestpolicycookiebehavior_enum.OriginRequestPolicyCookieBehaviorEnum = dataclasses.field()
    cookies: Optional[shared_cookienames.CookieNames] = dataclasses.field(default=None)
    
