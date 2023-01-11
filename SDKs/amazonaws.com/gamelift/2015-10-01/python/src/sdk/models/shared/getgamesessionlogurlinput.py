import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetGameSessionLogURLInput:
    r"""GetGameSessionLogURLInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    
