import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stageretrymode_enum as shared_stageretrymode_enum


@dataclass_json
@dataclasses.dataclass
class RetryStageExecutionInput:
    r"""RetryStageExecutionInput
    Represents the input of a <code>RetryStageExecution</code> action.
    """
    
    pipeline_execution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    retry_mode: shared_stageretrymode_enum.StageRetryModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryMode') }})
    stage_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
