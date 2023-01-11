import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectmitigationactionexecution as shared_detectmitigationactionexecution


@dataclass_json
@dataclasses.dataclass
class ListDetectMitigationActionsExecutionsResponse:
    actions_executions: Optional[list[shared_detectmitigationactionexecution.DetectMitigationActionExecution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsExecutions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
