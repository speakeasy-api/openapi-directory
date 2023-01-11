import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import format_enum as shared_format_enum


@dataclass_json
@dataclasses.dataclass
class DataItem:
    r"""DataItem
    The data in a particular data cell defined on the screen.
    """
    
    formatted_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    override_format: Optional[shared_format_enum.FormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideFormat') }})
    raw_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawValue') }})
    
