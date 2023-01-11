import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowstep as shared_workflowstep
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateWorkflowRequest:
    steps: list[shared_workflowstep.WorkflowStep] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    on_exception_steps: Optional[list[shared_workflowstep.WorkflowStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnExceptionSteps') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
