import dataclasses
from typing import Optional
from enum import Enum
from ..shared import cachepolicyheaderbehavior_enum as shared_cachepolicyheaderbehavior_enum
from ..shared import headers as shared_headers


@dataclasses.dataclass
class CachePolicyHeadersConfig:
    r"""CachePolicyHeadersConfig
    An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
    """
    
    header_behavior: shared_cachepolicyheaderbehavior_enum.CachePolicyHeaderBehaviorEnum = dataclasses.field()
    headers: Optional[shared_headers.Headers] = dataclasses.field(default=None)
    
