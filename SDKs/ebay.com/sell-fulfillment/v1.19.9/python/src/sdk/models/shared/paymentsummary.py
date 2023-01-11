import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payment as shared_payment
from ..shared import orderrefund as shared_orderrefund
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class PaymentSummary:
    r"""PaymentSummary
    This type contains information about the various monetary exchanges that apply to the net balance due for the order.
    """
    
    payments: Optional[list[shared_payment.Payment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    refunds: Optional[list[shared_orderrefund.OrderRefund]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    total_due_seller: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDueSeller') }})
    
