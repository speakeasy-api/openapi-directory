import dataclasses
from typing import Optional
from ..shared import reservedcachenodelist as shared_reservedcachenodelist


@dataclasses.dataclass
class ReservedCacheNodeMessage:
    r"""ReservedCacheNodeMessage
    Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    reserved_cache_nodes: Optional[list[shared_reservedcachenodelist.ReservedCacheNodeList]] = dataclasses.field(default=None)
    
