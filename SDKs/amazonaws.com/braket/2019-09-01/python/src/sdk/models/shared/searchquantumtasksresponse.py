import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quantumtasksummary as shared_quantumtasksummary


@dataclass_json
@dataclasses.dataclass
class SearchQuantumTasksResponse:
    quantum_tasks: list[shared_quantumtasksummary.QuantumTaskSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantumTasks') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
