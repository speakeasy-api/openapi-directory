import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logstream as shared_logstream


@dataclass_json
@dataclasses.dataclass
class DescribeLogStreamsResponse:
    log_streams: Optional[list[shared_logstream.LogStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreams') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
