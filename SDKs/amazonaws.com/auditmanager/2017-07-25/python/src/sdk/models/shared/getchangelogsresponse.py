import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changelog as shared_changelog


@dataclass_json
@dataclasses.dataclass
class GetChangeLogsResponse:
    change_logs: Optional[list[shared_changelog.ChangeLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeLogs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
