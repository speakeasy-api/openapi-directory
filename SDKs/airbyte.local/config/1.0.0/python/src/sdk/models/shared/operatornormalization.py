import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OperatorNormalizationOptionEnum(str, Enum):
    BASIC = "basic"


@dataclass_json
@dataclasses.dataclass
class OperatorNormalization:
    option: Optional[OperatorNormalizationOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    
