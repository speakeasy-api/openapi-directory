import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontype as shared_actiontype
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateCustomActionTypeOutput:
    r"""CreateCustomActionTypeOutput
    Represents the output of a <code>CreateCustomActionType</code> operation.
    """
    
    action_type: shared_actiontype.ActionType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
