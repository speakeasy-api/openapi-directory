import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SetTimerAction:
    r"""SetTimerAction
    Information needed to set the timer.
    """
    
    timer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerName') }})
    duration_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationExpression') }})
    seconds: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
