import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseEventsRequest:
    relational_database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInMinutes') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    
