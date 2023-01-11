import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabaseevent as shared_relationaldatabaseevent


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseEventsResult:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    relational_database_events: Optional[list[shared_relationaldatabaseevent.RelationalDatabaseEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseEvents') }})
    
