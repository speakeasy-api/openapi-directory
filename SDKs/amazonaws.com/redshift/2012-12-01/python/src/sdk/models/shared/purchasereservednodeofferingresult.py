import dataclasses
from typing import Optional
from ..shared import reservednode as shared_reservednode


@dataclasses.dataclass
class PurchaseReservedNodeOfferingResult:
    reserved_node: Optional[shared_reservednode.ReservedNode] = dataclasses.field(default=None)
    
