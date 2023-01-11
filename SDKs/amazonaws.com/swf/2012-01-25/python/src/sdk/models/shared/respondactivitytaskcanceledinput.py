import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RespondActivityTaskCanceledInput:
    task_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
