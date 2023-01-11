import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cancelrequest as shared_cancelrequest


@dataclass_json
@dataclasses.dataclass
class CancelStatus:
    r"""CancelStatus
    This type contains information about any requests that have been made to cancel an order.
    """
    
    cancel_requests: Optional[list[shared_cancelrequest.CancelRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequests') }})
    cancel_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelState') }})
    cancelled_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelledDate') }})
    
