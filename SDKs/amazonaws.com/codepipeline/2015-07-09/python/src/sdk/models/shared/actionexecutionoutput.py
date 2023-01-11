import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionexecutionresult as shared_actionexecutionresult
from ..shared import artifactdetail as shared_artifactdetail


@dataclass_json
@dataclasses.dataclass
class ActionExecutionOutput:
    r"""ActionExecutionOutput
    Output details listed for an action execution, such as the action execution result.
    """
    
    execution_result: Optional[shared_actionexecutionresult.ActionExecutionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionResult') }})
    output_artifacts: Optional[list[shared_artifactdetail.ArtifactDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifacts') }})
    output_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVariables') }})
    
