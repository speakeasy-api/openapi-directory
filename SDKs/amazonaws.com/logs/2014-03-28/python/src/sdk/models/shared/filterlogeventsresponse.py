import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filteredlogevent as shared_filteredlogevent
from ..shared import searchedlogstream as shared_searchedlogstream


@dataclass_json
@dataclasses.dataclass
class FilterLogEventsResponse:
    events: Optional[list[shared_filteredlogevent.FilteredLogEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    searched_log_streams: Optional[list[shared_searchedlogstream.SearchedLogStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchedLogStreams') }})
    
