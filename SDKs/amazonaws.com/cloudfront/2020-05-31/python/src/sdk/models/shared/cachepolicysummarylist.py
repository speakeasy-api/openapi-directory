import dataclasses
from enum import Enum
from ..shared import cachepolicy as shared_cachepolicy
from ..shared import cachepolicytype_enum as shared_cachepolicytype_enum


@dataclasses.dataclass
class CachePolicySummaryList:
    r"""CachePolicySummaryList
    Contains a cache policy.
    """
    
    cache_policy: shared_cachepolicy.CachePolicy = dataclasses.field()
    type: shared_cachepolicytype_enum.CachePolicyTypeEnum = dataclasses.field()
    
