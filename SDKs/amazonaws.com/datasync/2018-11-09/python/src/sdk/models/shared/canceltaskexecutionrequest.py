import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CancelTaskExecutionRequest:
    r"""CancelTaskExecutionRequest
    CancelTaskExecutionRequest
    """
    
    task_execution_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutionArn') }})
    
