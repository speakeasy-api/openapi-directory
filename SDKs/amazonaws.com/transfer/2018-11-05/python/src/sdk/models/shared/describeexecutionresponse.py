import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describedexecution as shared_describedexecution


@dataclass_json
@dataclasses.dataclass
class DescribeExecutionResponse:
    execution: shared_describedexecution.DescribedExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Execution') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    
