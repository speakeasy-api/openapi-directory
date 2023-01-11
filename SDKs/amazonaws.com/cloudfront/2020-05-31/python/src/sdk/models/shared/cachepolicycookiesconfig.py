import dataclasses
from typing import Optional
from enum import Enum
from ..shared import cachepolicycookiebehavior_enum as shared_cachepolicycookiebehavior_enum
from ..shared import cookienames as shared_cookienames


@dataclasses.dataclass
class CachePolicyCookiesConfig:
    r"""CachePolicyCookiesConfig
    An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
    """
    
    cookie_behavior: shared_cachepolicycookiebehavior_enum.CachePolicyCookieBehaviorEnum = dataclasses.field()
    cookies: Optional[shared_cookienames.CookieNames] = dataclasses.field(default=None)
    
