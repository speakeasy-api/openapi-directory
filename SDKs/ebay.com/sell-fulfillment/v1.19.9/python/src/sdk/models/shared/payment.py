import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import paymenthold as shared_paymenthold


@dataclass_json
@dataclasses.dataclass
class Payment:
    r"""Payment
    This type is used to provide details about the seller payments for an order.
    """
    
    amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    payment_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDate') }})
    payment_holds: Optional[list[shared_paymenthold.PaymentHold]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentHolds') }})
    payment_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethod') }})
    payment_reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentReferenceId') }})
    payment_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentStatus') }})
    
