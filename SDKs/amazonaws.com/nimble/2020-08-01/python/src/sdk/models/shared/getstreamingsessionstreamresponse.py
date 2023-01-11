import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingsessionstream as shared_streamingsessionstream


@dataclass_json
@dataclasses.dataclass
class GetStreamingSessionStreamResponse:
    stream: Optional[shared_streamingsessionstream.StreamingSessionStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    
