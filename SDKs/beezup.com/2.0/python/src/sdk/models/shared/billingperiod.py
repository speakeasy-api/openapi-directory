import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BillingPeriod:
    billing_period_in_month: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodInMonth') }})
    discount_percentage: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    
