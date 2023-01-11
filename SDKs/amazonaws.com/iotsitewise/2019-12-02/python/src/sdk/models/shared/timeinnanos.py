import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimeInNanos:
    r"""TimeInNanos
    Contains a timestamp with optional nanosecond granularity.
    """
    
    time_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInSeconds') }})
    offset_in_nanos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetInNanos') }})
    
