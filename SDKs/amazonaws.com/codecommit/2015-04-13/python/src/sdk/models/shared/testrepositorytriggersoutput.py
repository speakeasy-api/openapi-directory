import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorytriggerexecutionfailure as shared_repositorytriggerexecutionfailure


@dataclass_json
@dataclasses.dataclass
class TestRepositoryTriggersOutput:
    r"""TestRepositoryTriggersOutput
    Represents the output of a test repository triggers operation.
    """
    
    failed_executions: Optional[list[shared_repositorytriggerexecutionfailure.RepositoryTriggerExecutionFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedExecutions') }})
    successful_executions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successfulExecutions') }})
    
