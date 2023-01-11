import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simpleamount as shared_simpleamount


@dataclass_json
@dataclasses.dataclass
class PaymentDisputeOutcomeDetail:
    r"""PaymentDisputeOutcomeDetail
    This type is used by the resolution container that is returned for payment disputes that have been resolved.
    """
    
    fees: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    protected_amount: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedAmount') }})
    protection_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionStatus') }})
    reason_for_closure: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForClosure') }})
    recoup_amount: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoupAmount') }})
    total_fee_credit: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFeeCredit') }})
    
