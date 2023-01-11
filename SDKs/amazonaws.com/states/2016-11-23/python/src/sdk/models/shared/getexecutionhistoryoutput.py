import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historyevent as shared_historyevent


@dataclass_json
@dataclasses.dataclass
class GetExecutionHistoryOutput:
    events: list[shared_historyevent.HistoryEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
