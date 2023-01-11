import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelineexecution as shared_pipelineexecution


@dataclass_json
@dataclasses.dataclass
class GetPipelineExecutionOutput:
    r"""GetPipelineExecutionOutput
    Represents the output of a <code>GetPipelineExecution</code> action.
    """
    
    pipeline_execution: Optional[shared_pipelineexecution.PipelineExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecution') }})
    
