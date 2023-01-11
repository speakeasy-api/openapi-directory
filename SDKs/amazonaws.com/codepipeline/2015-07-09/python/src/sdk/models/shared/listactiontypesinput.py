import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionowner_enum as shared_actionowner_enum


@dataclass_json
@dataclasses.dataclass
class ListActionTypesInput:
    r"""ListActionTypesInput
    Represents the input of a <code>ListActionTypes</code> action.
    """
    
    action_owner_filter: Optional[shared_actionowner_enum.ActionOwnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionOwnerFilter') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    region_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionFilter') }})
    
