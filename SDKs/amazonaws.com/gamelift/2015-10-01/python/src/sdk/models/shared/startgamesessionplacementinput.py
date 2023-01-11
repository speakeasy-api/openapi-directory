import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import desiredplayersession as shared_desiredplayersession
from ..shared import gameproperty as shared_gameproperty
from ..shared import playerlatency as shared_playerlatency


@dataclass_json
@dataclasses.dataclass
class StartGameSessionPlacementInput:
    r"""StartGameSessionPlacementInput
    Represents the input for a request operation.
    """
    
    game_session_queue_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueueName') }})
    maximum_player_session_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    placement_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementId') }})
    desired_player_sessions: Optional[list[shared_desiredplayersession.DesiredPlayerSession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredPlayerSessions') }})
    game_properties: Optional[list[shared_gameproperty.GameProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameProperties') }})
    game_session_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionData') }})
    game_session_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionName') }})
    player_latencies: Optional[list[shared_playerlatency.PlayerLatency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerLatencies') }})
    
