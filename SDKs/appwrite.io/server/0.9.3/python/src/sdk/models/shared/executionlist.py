import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import execution as shared_execution


@dataclass_json
@dataclasses.dataclass
class ExecutionList:
    r"""ExecutionList
    Executions List
    """
    
    executions: list[shared_execution.Execution] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
