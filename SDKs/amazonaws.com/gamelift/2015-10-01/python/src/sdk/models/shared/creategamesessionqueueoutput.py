import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesessionqueue as shared_gamesessionqueue


@dataclass_json
@dataclasses.dataclass
class CreateGameSessionQueueOutput:
    r"""CreateGameSessionQueueOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_queue: Optional[shared_gamesessionqueue.GameSessionQueue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueue') }})
    
