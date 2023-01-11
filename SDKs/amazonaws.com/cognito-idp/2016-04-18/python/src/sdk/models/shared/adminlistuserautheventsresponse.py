import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autheventtype as shared_autheventtype


@dataclass_json
@dataclasses.dataclass
class AdminListUserAuthEventsResponse:
    auth_events: Optional[list[shared_autheventtype.AuthEventType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthEvents') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
