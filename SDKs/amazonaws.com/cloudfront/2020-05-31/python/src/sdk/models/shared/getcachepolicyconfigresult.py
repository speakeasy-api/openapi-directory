import dataclasses
from typing import Optional
from ..shared import cachepolicyconfig as shared_cachepolicyconfig


@dataclasses.dataclass
class GetCachePolicyConfigResult:
    cache_policy_config: Optional[shared_cachepolicyconfig.CachePolicyConfig] = dataclasses.field(default=None)
    
