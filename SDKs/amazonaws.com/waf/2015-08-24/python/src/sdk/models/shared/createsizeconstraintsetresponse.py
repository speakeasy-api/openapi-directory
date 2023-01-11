import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sizeconstraintset as shared_sizeconstraintset


@dataclass_json
@dataclasses.dataclass
class CreateSizeConstraintSetResponse:
    change_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    size_constraint_set: Optional[shared_sizeconstraintset.SizeConstraintSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeConstraintSet') }})
    
