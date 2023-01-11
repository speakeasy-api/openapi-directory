import dataclasses
from typing import Optional
from ..shared import reservednode as shared_reservednode


@dataclasses.dataclass
class AcceptReservedNodeExchangeOutputMessage:
    exchanged_reserved_node: Optional[shared_reservednode.ReservedNode] = dataclasses.field(default=None)
    
