import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontypeid as shared_actiontypeid
from ..shared import artifactdetail as shared_artifactdetail


@dataclass_json
@dataclasses.dataclass
class ActionExecutionInput:
    r"""ActionExecutionInput
    Input information used for an action execution.
    """
    
    action_type_id: Optional[shared_actiontypeid.ActionTypeID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    configuration: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    input_artifacts: Optional[list[shared_artifactdetail.ArtifactDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifacts') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    resolved_configuration: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedConfiguration') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
