import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MetricValue:
    r"""MetricValue
    The value to be compared with the <code>metric</code>.
    """
    
    cidrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    number: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    numbers: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    strings: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strings') }})
    
