import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stageexecutionstatus_enum as shared_stageexecutionstatus_enum


@dataclass_json
@dataclasses.dataclass
class StageExecution:
    r"""StageExecution
    Represents information about the run of a stage.
    """
    
    pipeline_execution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    status: shared_stageexecutionstatus_enum.StageExecutionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
