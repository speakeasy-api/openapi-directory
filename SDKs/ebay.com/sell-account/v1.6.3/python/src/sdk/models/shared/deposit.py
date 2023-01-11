import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import timeduration as shared_timeduration
from ..shared import paymentmethod as shared_paymentmethod


@dataclass_json
@dataclasses.dataclass
class Deposit:
    r"""Deposit
    A container that describes the details of a deposit. Used only with motor listings.
    """
    
    amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    due_in: Optional[shared_timeduration.TimeDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueIn') }})
    payment_methods: Optional[list[shared_paymentmethod.PaymentMethod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethods') }})
    
