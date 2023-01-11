import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import run as shared_run


@dataclass_json
@dataclasses.dataclass
class StopRunResult:
    r"""StopRunResult
    Represents the results of your stop run attempt.
    """
    
    run: Optional[shared_run.Run] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    
