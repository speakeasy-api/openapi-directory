import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionrevision as shared_actionrevision
from ..shared import actionexecution as shared_actionexecution


@dataclass_json
@dataclasses.dataclass
class ActionState:
    r"""ActionState
    Represents information about the state of an action.
    """
    
    action_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    current_revision: Optional[shared_actionrevision.ActionRevision] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRevision') }})
    entity_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityUrl') }})
    latest_execution: Optional[shared_actionexecution.ActionExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestExecution') }})
    revision_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUrl') }})
    
