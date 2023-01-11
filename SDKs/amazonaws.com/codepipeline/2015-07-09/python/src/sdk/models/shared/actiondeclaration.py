import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontypeid as shared_actiontypeid
from ..shared import inputartifact as shared_inputartifact
from ..shared import outputartifact as shared_outputartifact


@dataclass_json
@dataclasses.dataclass
class ActionDeclaration:
    r"""ActionDeclaration
    Represents information about an action declaration.
    """
    
    action_type_id: shared_actiontypeid.ActionTypeID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    configuration: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    input_artifacts: Optional[list[shared_inputartifact.InputArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifacts') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    output_artifacts: Optional[list[shared_outputartifact.OutputArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifacts') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    run_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runOrder') }})
    
