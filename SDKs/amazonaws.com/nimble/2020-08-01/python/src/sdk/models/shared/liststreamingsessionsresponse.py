import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingsession as shared_streamingsession


@dataclass_json
@dataclasses.dataclass
class ListStreamingSessionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sessions: Optional[list[shared_streamingsession.StreamingSession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    
