import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import fee as shared_fee


@dataclass_json
@dataclasses.dataclass
class OrderLineItem:
    r"""OrderLineItem
    This type is used to show the fees that are deducted from a seller payout for each line item in an order.
    """
    
    fee_basis_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeBasisAmount') }})
    line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    marketplace_fees: Optional[list[shared_fee.Fee]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceFees') }})
    
