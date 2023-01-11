import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExecuteCommandRequest:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    interactive: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactive') }})
    task: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    
