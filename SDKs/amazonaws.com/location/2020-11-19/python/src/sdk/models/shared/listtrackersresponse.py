import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listtrackersresponseentry as shared_listtrackersresponseentry


@dataclass_json
@dataclasses.dataclass
class ListTrackersResponse:
    entries: list[shared_listtrackersresponseentry.ListTrackersResponseEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
