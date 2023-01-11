import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monetaryamount as shared_monetaryamount
from ..shared import recurringchargefrequency_enum as shared_recurringchargefrequency_enum


@dataclass_json
@dataclasses.dataclass
class RecurringCharge:
    r"""RecurringCharge
    Specifies whether charges for devices are recurring.
    """
    
    cost: Optional[shared_monetaryamount.MonetaryAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    frequency: Optional[shared_recurringchargefrequency_enum.RecurringChargeFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    
