import dataclasses
from typing import Optional
from enum import Enum
from ..shared import cachepolicyquerystringbehavior_enum as shared_cachepolicyquerystringbehavior_enum
from ..shared import querystringnames as shared_querystringnames


@dataclasses.dataclass
class CachePolicyQueryStringsConfig:
    r"""CachePolicyQueryStringsConfig
    An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
    """
    
    query_string_behavior: shared_cachepolicyquerystringbehavior_enum.CachePolicyQueryStringBehaviorEnum = dataclasses.field()
    query_strings: Optional[shared_querystringnames.QueryStringNames] = dataclasses.field(default=None)
    
