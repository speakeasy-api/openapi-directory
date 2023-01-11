import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecution as shared_workflowexecution


@dataclass_json
@dataclasses.dataclass
class DescribeWorkflowExecutionInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    
