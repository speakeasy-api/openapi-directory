import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import player as shared_player


@dataclass_json
@dataclasses.dataclass
class StartMatchBackfillInput:
    r"""StartMatchBackfillInput
    Represents the input for a request operation.
    """
    
    configuration_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationName') }})
    players: list[shared_player.Player] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Players') }})
    game_session_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionArn') }})
    ticket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketId') }})
    
