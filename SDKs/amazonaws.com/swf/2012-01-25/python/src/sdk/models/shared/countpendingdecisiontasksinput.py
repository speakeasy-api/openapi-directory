import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tasklist as shared_tasklist


@dataclass_json
@dataclasses.dataclass
class CountPendingDecisionTasksInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    task_list: shared_tasklist.TaskList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    
