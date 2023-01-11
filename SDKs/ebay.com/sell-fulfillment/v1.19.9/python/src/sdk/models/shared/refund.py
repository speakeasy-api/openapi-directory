import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Refund:
    r"""Refund
    This is the base type of the issueRefund response payload. As long as the issueRefund method does not trigger an error, a response payload will be returned.
    """
    
    refund_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundId') }})
    refund_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundStatus') }})
    
