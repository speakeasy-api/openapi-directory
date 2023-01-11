import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputlogevent as shared_inputlogevent


@dataclass_json
@dataclasses.dataclass
class PutLogEventsRequest:
    log_events: list[shared_inputlogevent.InputLogEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEvents') }})
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    log_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamName') }})
    sequence_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceToken') }})
    
