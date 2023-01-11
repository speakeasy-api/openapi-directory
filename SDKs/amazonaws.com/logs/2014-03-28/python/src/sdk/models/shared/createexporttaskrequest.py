import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateExportTaskRequest:
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    from_: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    destination_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPrefix') }})
    log_stream_name_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamNamePrefix') }})
    task_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskName') }})
    
