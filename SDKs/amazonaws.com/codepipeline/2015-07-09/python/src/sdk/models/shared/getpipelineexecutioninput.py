import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPipelineExecutionInput:
    r"""GetPipelineExecutionInput
    Represents the input of a <code>GetPipelineExecution</code> action.
    """
    
    pipeline_execution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    
