import dataclasses
from typing import Optional
from ..shared import cachesecuritygroup as shared_cachesecuritygroup


@dataclasses.dataclass
class RevokeCacheSecurityGroupIngressResult:
    cache_security_group: Optional[shared_cachesecuritygroup.CacheSecurityGroup] = dataclasses.field(default=None)
    
