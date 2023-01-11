import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentdisputeactivity as shared_paymentdisputeactivity


@dataclass_json
@dataclasses.dataclass
class PaymentDisputeActivityHistory:
    r"""PaymentDisputeActivityHistory
    This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
    """
    
    activity: Optional[list[shared_paymentdisputeactivity.PaymentDisputeActivity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    
