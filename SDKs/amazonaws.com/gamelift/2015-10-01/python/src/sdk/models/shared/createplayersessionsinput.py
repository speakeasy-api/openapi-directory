import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreatePlayerSessionsInput:
    r"""CreatePlayerSessionsInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    player_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerIds') }})
    player_data_map: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerDataMap') }})
    
