import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tasklistentry as shared_tasklistentry


@dataclass_json
@dataclasses.dataclass
class ListTasksResponse:
    r"""ListTasksResponse
    ListTasksResponse
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    tasks: Optional[list[shared_tasklistentry.TaskListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tasks') }})
    
