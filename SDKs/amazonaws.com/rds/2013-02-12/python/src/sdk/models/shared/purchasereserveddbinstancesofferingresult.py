import dataclasses
from typing import Optional
from ..shared import reserveddbinstance as shared_reserveddbinstance


@dataclasses.dataclass
class PurchaseReservedDbInstancesOfferingResult:
    reserved_db_instance: Optional[shared_reserveddbinstance.ReservedDbInstance] = dataclasses.field(default=None)
    
