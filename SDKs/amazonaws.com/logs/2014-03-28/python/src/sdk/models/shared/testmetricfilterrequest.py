import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TestMetricFilterRequest:
    filter_pattern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_event_messages: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEventMessages') }})
    
