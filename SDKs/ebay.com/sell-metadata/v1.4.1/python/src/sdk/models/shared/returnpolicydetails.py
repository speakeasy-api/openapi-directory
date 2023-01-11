import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeduration as shared_timeduration


@dataclass_json
@dataclasses.dataclass
class ReturnPolicyDetails:
    r"""ReturnPolicyDetails
    This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
    """
    
    policy_description_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDescriptionEnabled') }})
    refund_methods: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundMethods') }})
    return_methods: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethods') }})
    return_periods: Optional[list[shared_timeduration.TimeDuration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPeriods') }})
    return_shipping_cost_payers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingCostPayers') }})
    returns_acceptance_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsAcceptanceEnabled') }})
    
