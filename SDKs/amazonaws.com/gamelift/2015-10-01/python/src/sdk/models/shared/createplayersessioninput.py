import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreatePlayerSessionInput:
    r"""CreatePlayerSessionInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    player_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerId') }})
    player_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerData') }})
    
