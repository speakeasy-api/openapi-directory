import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DesiredPlayerSession:
    r"""DesiredPlayerSession
    Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
    """
    
    player_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerData') }})
    player_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerId') }})
    
