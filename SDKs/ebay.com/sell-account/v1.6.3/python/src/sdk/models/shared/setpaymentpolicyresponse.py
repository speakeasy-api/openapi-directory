import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorytype as shared_categorytype
from ..shared import deposit as shared_deposit
from ..shared import timeduration as shared_timeduration
from ..shared import paymentmethod as shared_paymentmethod
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class SetPaymentPolicyResponse:
    r"""SetPaymentPolicyResponse
    Complex type that that gets populated with a response containing a payment policy.
    """
    
    category_types: Optional[list[shared_categorytype.CategoryType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTypes') }})
    deposit: Optional[shared_deposit.Deposit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    full_payment_due_in: Optional[shared_timeduration.TimeDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullPaymentDueIn') }})
    immediate_pay: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('immediatePay') }})
    marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment_instructions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentInstructions') }})
    payment_methods: Optional[list[shared_paymentmethod.PaymentMethod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethods') }})
    payment_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPolicyId') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
