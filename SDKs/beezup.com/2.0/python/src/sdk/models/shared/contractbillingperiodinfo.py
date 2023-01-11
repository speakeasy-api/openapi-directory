import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContractBillingPeriodInfo:
    r"""ContractBillingPeriodInfo
    Describe the billing period information related to the offer.
    """
    
    amount_billing_period_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountBillingPeriodDiscount') }})
    billing_period_in_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodInMonth') }})
    billing_period_percent_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodPercentDiscount') }})
    
