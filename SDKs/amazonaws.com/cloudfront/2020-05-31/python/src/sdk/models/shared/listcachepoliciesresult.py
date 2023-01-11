import dataclasses
from typing import Optional
from ..shared import cachepolicylist as shared_cachepolicylist


@dataclasses.dataclass
class ListCachePoliciesResult:
    cache_policy_list: Optional[shared_cachepolicylist.CachePolicyList] = dataclasses.field(default=None)
    
