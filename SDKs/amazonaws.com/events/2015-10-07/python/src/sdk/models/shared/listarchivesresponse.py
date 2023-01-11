import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import archive as shared_archive


@dataclass_json
@dataclasses.dataclass
class ListArchivesResponse:
    archives: Optional[list[shared_archive.Archive]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Archives') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
