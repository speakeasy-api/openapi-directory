import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CombinedBillingUsage:
    days_left_in_billing_cycle: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_left_in_billing_cycle') }})
    estimated_paid_storage_for_month: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_paid_storage_for_month') }})
    estimated_storage_for_month: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_storage_for_month') }})
    
