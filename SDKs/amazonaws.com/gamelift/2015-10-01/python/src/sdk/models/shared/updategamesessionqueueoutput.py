import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesessionqueue as shared_gamesessionqueue


@dataclass_json
@dataclasses.dataclass
class UpdateGameSessionQueueOutput:
    r"""UpdateGameSessionQueueOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_queue: Optional[shared_gamesessionqueue.GameSessionQueue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueue') }})
    
