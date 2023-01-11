import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnumOptionInsertRequest:
    enum_option: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_option') }})
    after_enum_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('after_enum_option') }})
    before_enum_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('before_enum_option') }})
    
