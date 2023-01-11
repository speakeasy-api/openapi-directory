import dataclasses
from typing import Optional
from ..shared import reservedcachenode as shared_reservedcachenode


@dataclasses.dataclass
class PurchaseReservedCacheNodesOfferingResult:
    reserved_cache_node: Optional[shared_reservedcachenode.ReservedCacheNode] = dataclasses.field(default=None)
    
