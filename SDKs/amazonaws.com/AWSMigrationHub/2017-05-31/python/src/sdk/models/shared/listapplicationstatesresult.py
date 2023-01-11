import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationstate as shared_applicationstate


@dataclass_json
@dataclasses.dataclass
class ListApplicationStatesResult:
    application_state_list: Optional[list[shared_applicationstate.ApplicationState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStateList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
