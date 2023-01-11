import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteTaskSetRequest:
    cluster: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    service: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    task_set: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSet') }})
    force: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    
