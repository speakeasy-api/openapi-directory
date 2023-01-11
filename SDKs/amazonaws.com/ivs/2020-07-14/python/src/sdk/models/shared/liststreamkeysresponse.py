import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamkeysummary as shared_streamkeysummary


@dataclass_json
@dataclasses.dataclass
class ListStreamKeysResponse:
    stream_keys: list[shared_streamkeysummary.StreamKeySummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamKeys') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
