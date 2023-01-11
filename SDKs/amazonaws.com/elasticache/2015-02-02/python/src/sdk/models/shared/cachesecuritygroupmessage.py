import dataclasses
from typing import Optional
from ..shared import cachesecuritygroups as shared_cachesecuritygroups


@dataclasses.dataclass
class CacheSecurityGroupMessage:
    r"""CacheSecurityGroupMessage
    Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
    """
    
    cache_security_groups: Optional[list[shared_cachesecuritygroups.CacheSecurityGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
