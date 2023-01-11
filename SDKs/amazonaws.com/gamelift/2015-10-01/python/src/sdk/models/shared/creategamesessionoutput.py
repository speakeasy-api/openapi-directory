import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesession as shared_gamesession


@dataclass_json
@dataclasses.dataclass
class CreateGameSessionOutput:
    r"""CreateGameSessionOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session: Optional[shared_gamesession.GameSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSession') }})
    
