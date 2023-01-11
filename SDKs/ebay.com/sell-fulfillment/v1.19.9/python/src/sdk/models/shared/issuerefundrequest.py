import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simpleamount as shared_simpleamount
from ..shared import refunditem as shared_refunditem


@dataclass_json
@dataclasses.dataclass
class IssueRefundRequest:
    r"""IssueRefundRequest
    The base type used by the request payload of the issueRefund method.
    """
    
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    order_level_refund_amount: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLevelRefundAmount') }})
    reason_for_refund: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForRefund') }})
    refund_items: Optional[list[shared_refunditem.RefundItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundItems') }})
    
