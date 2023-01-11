import dataclasses
from typing import Optional
from ..shared import reservedcachenodesofferinglist as shared_reservedcachenodesofferinglist


@dataclasses.dataclass
class ReservedCacheNodesOfferingMessage:
    r"""ReservedCacheNodesOfferingMessage
    Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    reserved_cache_nodes_offerings: Optional[list[shared_reservedcachenodesofferinglist.ReservedCacheNodesOfferingList]] = dataclasses.field(default=None)
    
