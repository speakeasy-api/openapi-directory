import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RetryStageExecutionOutput:
    r"""RetryStageExecutionOutput
    Represents the output of a <code>RetryStageExecution</code> action.
    """
    
    pipeline_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    
