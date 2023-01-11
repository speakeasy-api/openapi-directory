import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionexecutiondetail as shared_actionexecutiondetail


@dataclass_json
@dataclasses.dataclass
class ListActionExecutionsOutput:
    action_execution_details: Optional[list[shared_actionexecutiondetail.ActionExecutionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionExecutionDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
