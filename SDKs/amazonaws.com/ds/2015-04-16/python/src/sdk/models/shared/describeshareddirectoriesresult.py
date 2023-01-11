import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shareddirectory as shared_shareddirectory


@dataclass_json
@dataclasses.dataclass
class DescribeSharedDirectoriesResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    shared_directories: Optional[list[shared_shareddirectory.SharedDirectory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedDirectories') }})
    
