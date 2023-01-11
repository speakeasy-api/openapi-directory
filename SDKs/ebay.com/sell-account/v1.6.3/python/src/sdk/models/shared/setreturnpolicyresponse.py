import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorytype as shared_categorytype
from ..shared import internationalreturnoverridetype as shared_internationalreturnoverridetype
from ..shared import timeduration as shared_timeduration
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class SetReturnPolicyResponse:
    r"""SetReturnPolicyResponse
    Complex type that that gets populated with a response containing a return policy.
    """
    
    category_types: Optional[list[shared_categorytype.CategoryType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTypes') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extended_holiday_returns_offered: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedHolidayReturnsOffered') }})
    international_override: Optional[shared_internationalreturnoverridetype.InternationalReturnOverrideType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalOverride') }})
    marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    refund_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundMethod') }})
    restocking_fee_percentage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restockingFeePercentage') }})
    return_instructions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnInstructions') }})
    return_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethod') }})
    return_period: Optional[shared_timeduration.TimeDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPeriod') }})
    return_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyId') }})
    return_shipping_cost_payer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingCostPayer') }})
    returns_accepted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsAccepted') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
