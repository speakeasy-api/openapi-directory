import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionsummary as shared_executionsummary


@dataclass_json
@dataclasses.dataclass
class ListExecutionsOutput:
    executions: Optional[list[shared_executionsummary.ExecutionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
