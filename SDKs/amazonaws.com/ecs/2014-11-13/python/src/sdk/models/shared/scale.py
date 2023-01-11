import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scaleunit_enum as shared_scaleunit_enum


@dataclass_json
@dataclasses.dataclass
class Scale:
    r"""Scale
    A floating-point percentage of the desired number of tasks to place and keep running in the task set.
    """
    
    unit: Optional[shared_scaleunit_enum.ScaleUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
