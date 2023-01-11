import dataclasses
from typing import Optional
from ..shared import cookiepreference as shared_cookiepreference
from ..shared import headers as shared_headers
from ..shared import querystringcachekeys as shared_querystringcachekeys


@dataclasses.dataclass
class ForwardedValues:
    r"""ForwardedValues
    A complex type that specifies how CloudFront handles query strings and cookies.
    """
    
    cookies: shared_cookiepreference.CookiePreference = dataclasses.field()
    query_string: bool = dataclasses.field()
    headers: Optional[shared_headers.Headers] = dataclasses.field(default=None)
    query_string_cache_keys: Optional[shared_querystringcachekeys.QueryStringCacheKeys] = dataclasses.field(default=None)
    
