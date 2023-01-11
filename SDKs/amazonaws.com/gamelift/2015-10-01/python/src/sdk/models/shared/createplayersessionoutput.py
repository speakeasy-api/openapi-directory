import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playersession as shared_playersession


@dataclass_json
@dataclasses.dataclass
class CreatePlayerSessionOutput:
    r"""CreatePlayerSessionOutput
    Represents the returned data in response to a request operation.
    """
    
    player_session: Optional[shared_playersession.PlayerSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerSession') }})
    
