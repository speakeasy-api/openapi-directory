import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflow as shared_workflow


@dataclass_json
@dataclasses.dataclass
class GetWorkflowResponse:
    workflow: Optional[shared_workflow.Workflow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflow') }})
    
