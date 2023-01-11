import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruletype_enum as shared_ruletype_enum


@dataclass_json
@dataclasses.dataclass
class Rule:
    config: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    type: Optional[shared_ruletype_enum.RuleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
