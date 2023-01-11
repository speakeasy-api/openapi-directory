import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import removetargetsresultentry as shared_removetargetsresultentry


@dataclass_json
@dataclasses.dataclass
class RemoveTargetsResponse:
    failed_entries: Optional[list[shared_removetargetsresultentry.RemoveTargetsResultEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEntries') }})
    failed_entry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEntryCount') }})
    
