import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamprocessor as shared_streamprocessor


@dataclass_json
@dataclasses.dataclass
class ListStreamProcessorsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    stream_processors: Optional[list[shared_streamprocessor.StreamProcessor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamProcessors') }})
    
