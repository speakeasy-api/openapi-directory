import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import run as shared_run


@dataclass_json
@dataclasses.dataclass
class ListRunsResult:
    r"""ListRunsResult
    Represents the result of a list runs request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    runs: Optional[list[shared_run.Run]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    
