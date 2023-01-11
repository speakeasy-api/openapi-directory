import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import durationunit_enum as shared_durationunit_enum


@dataclass_json
@dataclasses.dataclass
class Duration:
    r"""Duration
    An object that represents a duration of time.
    """
    
    unit: Optional[shared_durationunit_enum.DurationUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
