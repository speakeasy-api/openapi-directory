import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bonuspayment as shared_bonuspayment


@dataclass_json
@dataclasses.dataclass
class ListBonusPaymentsResponse:
    bonus_payments: Optional[list[shared_bonuspayment.BonusPayment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BonusPayments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumResults') }})
    
