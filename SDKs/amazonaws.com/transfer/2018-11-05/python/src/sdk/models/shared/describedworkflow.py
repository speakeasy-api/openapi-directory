import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowstep as shared_workflowstep
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class DescribedWorkflow:
    r"""DescribedWorkflow
    Describes the properties of the specified workflow
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    on_exception_steps: Optional[list[shared_workflowstep.WorkflowStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnExceptionSteps') }})
    steps: Optional[list[shared_workflowstep.WorkflowStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    workflow_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    
