import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionrevision as shared_actionrevision


@dataclass_json
@dataclasses.dataclass
class PutActionRevisionInput:
    r"""PutActionRevisionInput
    Represents the input of a <code>PutActionRevision</code> action.
    """
    
    action_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    action_revision: shared_actionrevision.ActionRevision = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRevision') }})
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    stage_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
