import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingperiod as shared_billingperiod
from ..shared import billingperiodlistlinks as shared_billingperiodlistlinks


@dataclass_json
@dataclasses.dataclass
class BillingPeriodList:
    billing_periods: list[shared_billingperiod.BillingPeriod] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriods') }})
    links: shared_billingperiodlistlinks.BillingPeriodListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
