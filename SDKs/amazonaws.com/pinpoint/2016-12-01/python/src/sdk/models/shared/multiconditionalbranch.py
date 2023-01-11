import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplecondition as shared_simplecondition


@dataclass_json
@dataclasses.dataclass
class MultiConditionalBranch:
    r"""MultiConditionalBranch
    Specifies a condition to evaluate for an activity path in a journey.
    """
    
    condition: Optional[shared_simplecondition.SimpleCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    next_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    
