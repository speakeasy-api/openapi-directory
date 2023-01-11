import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import legacyreference as shared_legacyreference
from ..shared import simpleamount as shared_simpleamount


@dataclass_json
@dataclasses.dataclass
class RefundItem:
    r"""RefundItem
    This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
    """
    
    legacy_reference: Optional[shared_legacyreference.LegacyReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyReference') }})
    line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    refund_amount: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundAmount') }})
    
