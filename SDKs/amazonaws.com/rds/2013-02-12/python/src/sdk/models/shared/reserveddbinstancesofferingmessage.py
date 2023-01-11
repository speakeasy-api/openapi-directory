import dataclasses
from typing import Optional
from ..shared import reserveddbinstancesofferinglist as shared_reserveddbinstancesofferinglist


@dataclasses.dataclass
class ReservedDbInstancesOfferingMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    reserved_db_instances_offerings: Optional[list[shared_reserveddbinstancesofferinglist.ReservedDbInstancesOfferingList]] = dataclasses.field(default=None)
    
