import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trigger as shared_trigger


@dataclass_json
@dataclasses.dataclass
class GetTriggersResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    triggers: Optional[list[shared_trigger.Trigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Triggers') }})
    
