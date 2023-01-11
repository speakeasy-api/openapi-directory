import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directory as shared_directory


@dataclass_json
@dataclasses.dataclass
class ListDirectoriesResponse:
    directories: list[shared_directory.Directory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Directories') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
