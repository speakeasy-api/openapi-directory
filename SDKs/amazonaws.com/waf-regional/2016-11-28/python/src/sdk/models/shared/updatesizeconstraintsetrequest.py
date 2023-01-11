import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sizeconstraintsetupdate as shared_sizeconstraintsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateSizeConstraintSetRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    size_constraint_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeConstraintSetId') }})
    updates: list[shared_sizeconstraintsetupdate.SizeConstraintSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
