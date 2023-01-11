import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customstepstatus_enum as shared_customstepstatus_enum


@dataclass_json
@dataclasses.dataclass
class SendWorkflowStepStateRequest:
    execution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionId') }})
    status: shared_customstepstatus_enum.CustomStepStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    
