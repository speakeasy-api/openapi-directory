import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bonustype_enum as shared_bonustype_enum


@dataclass_json
@dataclasses.dataclass
class BonusInfo:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    bonus_type: shared_bonustype_enum.BonusTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bonusType') }})
    
