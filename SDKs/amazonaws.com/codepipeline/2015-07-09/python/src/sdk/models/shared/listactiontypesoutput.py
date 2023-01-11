import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontype as shared_actiontype


@dataclass_json
@dataclasses.dataclass
class ListActionTypesOutput:
    r"""ListActionTypesOutput
    Represents the output of a <code>ListActionTypes</code> action.
    """
    
    action_types: list[shared_actiontype.ActionType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
