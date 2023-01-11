import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onlineszamlastatusmessage as shared_onlineszamlastatusmessage


@dataclass_json
@dataclasses.dataclass
class OnlineSzamlaStatus:
    messages: Optional[list[shared_onlineszamlastatusmessage.OnlineSzamlaStatusMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    
