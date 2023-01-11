import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AllocateHostsResult:
    r"""AllocateHostsResult
    Contains the output of AllocateHosts.
    """
    
    host_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
