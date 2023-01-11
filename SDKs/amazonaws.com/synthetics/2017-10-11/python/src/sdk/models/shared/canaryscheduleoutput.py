import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CanaryScheduleOutput:
    r"""CanaryScheduleOutput
    How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.
    """
    
    duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInSeconds') }})
    expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    
