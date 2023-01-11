import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventstream as shared_eventstream


@dataclass_json
@dataclasses.dataclass
class PutEventStreamResponse:
    event_stream: shared_eventstream.EventStream = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventStream') }})
    
