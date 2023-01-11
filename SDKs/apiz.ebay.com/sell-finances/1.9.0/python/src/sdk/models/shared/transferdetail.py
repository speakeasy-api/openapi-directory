import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import balanceadjustment as shared_balanceadjustment
from ..shared import charge as shared_charge
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class TransferDetail:
    r"""TransferDetail
    This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
    """
    
    balance_adjustment: Optional[shared_balanceadjustment.BalanceAdjustment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceAdjustment') }})
    charges: Optional[list[shared_charge.Charge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charges') }})
    total_charge_net_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalChargeNetAmount') }})
    
