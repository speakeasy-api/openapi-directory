import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingsession as shared_streamingsession


@dataclass_json
@dataclasses.dataclass
class DeleteStreamingSessionResponse:
    session: Optional[shared_streamingsession.StreamingSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    
