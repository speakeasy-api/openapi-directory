import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesessionplacement as shared_gamesessionplacement


@dataclass_json
@dataclasses.dataclass
class StartGameSessionPlacementOutput:
    r"""StartGameSessionPlacementOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_placement: Optional[shared_gamesessionplacement.GameSessionPlacement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionPlacement') }})
    
