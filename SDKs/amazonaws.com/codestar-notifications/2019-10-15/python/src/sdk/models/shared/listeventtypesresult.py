import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtypesummary as shared_eventtypesummary


@dataclass_json
@dataclasses.dataclass
class ListEventTypesResult:
    event_types: Optional[list[shared_eventtypesummary.EventTypeSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTypes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
