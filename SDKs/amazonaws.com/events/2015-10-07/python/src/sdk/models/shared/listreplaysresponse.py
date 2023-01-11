import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replay as shared_replay


@dataclass_json
@dataclasses.dataclass
class ListReplaysResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    replays: Optional[list[shared_replay.Replay]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replays') }})
    
