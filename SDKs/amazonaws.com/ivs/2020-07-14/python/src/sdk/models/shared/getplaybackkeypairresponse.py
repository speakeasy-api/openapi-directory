import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playbackkeypair as shared_playbackkeypair


@dataclass_json
@dataclasses.dataclass
class GetPlaybackKeyPairResponse:
    key_pair: Optional[shared_playbackkeypair.PlaybackKeyPair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPair') }})
    
