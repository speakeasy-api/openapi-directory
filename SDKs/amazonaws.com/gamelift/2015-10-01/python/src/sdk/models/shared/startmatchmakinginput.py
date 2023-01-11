import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import player as shared_player


@dataclass_json
@dataclasses.dataclass
class StartMatchmakingInput:
    r"""StartMatchmakingInput
    Represents the input for a request operation.
    """
    
    configuration_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationName') }})
    players: list[shared_player.Player] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Players') }})
    ticket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketId') }})
    
