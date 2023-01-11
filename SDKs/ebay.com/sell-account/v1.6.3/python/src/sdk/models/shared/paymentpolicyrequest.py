import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorytype as shared_categorytype
from ..shared import deposit as shared_deposit
from ..shared import timeduration as shared_timeduration
from ..shared import paymentmethod as shared_paymentmethod


@dataclass_json
@dataclasses.dataclass
class PaymentPolicyRequest:
    r"""PaymentPolicyRequest
    This root container defines a seller's payment policy for a specific marketplace and category type. Used when creating or updating a payment policy, paymentPolicyRequest encapsulates a seller's terms for how buyers can pay for the items they buy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
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
    
