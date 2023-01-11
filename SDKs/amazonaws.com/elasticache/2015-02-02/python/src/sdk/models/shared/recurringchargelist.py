import dataclasses
from typing import Optional


@dataclasses.dataclass
class RecurringChargeList:
    r"""RecurringChargeList
    Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
    """
    
    recurring_charge_amount: Optional[float] = dataclasses.field(default=None)
    recurring_charge_frequency: Optional[str] = dataclasses.field(default=None)
    
