import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listedexecution as shared_listedexecution


@dataclass_json
@dataclasses.dataclass
class ListExecutionsResponse:
    executions: list[shared_listedexecution.ListedExecution] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Executions') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
