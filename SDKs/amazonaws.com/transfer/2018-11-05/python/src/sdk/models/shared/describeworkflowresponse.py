import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describedworkflow as shared_describedworkflow


@dataclass_json
@dataclasses.dataclass
class DescribeWorkflowResponse:
    workflow: shared_describedworkflow.DescribedWorkflow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflow') }})
    
