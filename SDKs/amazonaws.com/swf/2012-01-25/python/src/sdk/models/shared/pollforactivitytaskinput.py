import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tasklist as shared_tasklist


@dataclass_json
@dataclasses.dataclass
class PollForActivityTaskInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    task_list: shared_tasklist.TaskList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    
