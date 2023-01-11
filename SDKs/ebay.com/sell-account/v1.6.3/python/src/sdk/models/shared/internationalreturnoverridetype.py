import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeduration as shared_timeduration


@dataclass_json
@dataclasses.dataclass
class InternationalReturnOverrideType:
    r"""InternationalReturnOverrideType
    This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
    """
    
    return_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethod') }})
    return_period: Optional[shared_timeduration.TimeDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPeriod') }})
    return_shipping_cost_payer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingCostPayer') }})
    returns_accepted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsAccepted') }})
    
