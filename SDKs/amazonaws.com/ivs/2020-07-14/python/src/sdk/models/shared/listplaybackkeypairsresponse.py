import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playbackkeypairsummary as shared_playbackkeypairsummary


@dataclass_json
@dataclasses.dataclass
class ListPlaybackKeyPairsResponse:
    key_pairs: list[shared_playbackkeypairsummary.PlaybackKeyPairSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
