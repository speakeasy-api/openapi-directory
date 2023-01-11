import dataclasses
from typing import Optional


@dataclasses.dataclass
class RecurringChargeList:
    recurring_charge_amount: Optional[float] = dataclasses.field(default=None)
    recurring_charge_frequency: Optional[str] = dataclasses.field(default=None)
    
