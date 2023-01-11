import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionFilter:
    r"""WorkflowExecutionFilter
    Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
    """
    
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    
