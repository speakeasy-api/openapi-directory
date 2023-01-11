import dataclasses
from typing import Optional
from ..shared import cachepolicy as shared_cachepolicy


@dataclasses.dataclass
class GetCachePolicyResult:
    cache_policy: Optional[shared_cachepolicy.CachePolicy] = dataclasses.field(default=None)
    
