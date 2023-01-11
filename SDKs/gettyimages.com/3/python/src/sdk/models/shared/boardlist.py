import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boardlistboard as shared_boardlistboard


@dataclass_json
@dataclasses.dataclass
class BoardList:
    board_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('board_count') }})
    boards: Optional[list[shared_boardlistboard.BoardListBoard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boards') }})
    
