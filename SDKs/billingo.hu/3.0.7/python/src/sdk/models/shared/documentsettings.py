import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onlinepayment_enum as shared_onlinepayment_enum
from ..shared import round_enum as shared_round_enum


@dataclass_json
@dataclasses.dataclass
class DocumentSettings:
    mediated_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediated_service') }})
    online_payment: Optional[shared_onlinepayment_enum.OnlinePaymentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('online_payment') }})
    place_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('place_id') }})
    round: Optional[shared_round_enum.RoundEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('round') }})
    without_financial_fulfillment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('without_financial_fulfillment') }})
    
