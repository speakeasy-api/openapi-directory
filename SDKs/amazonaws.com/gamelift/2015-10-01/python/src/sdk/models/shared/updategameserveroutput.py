import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameserver as shared_gameserver


@dataclass_json
@dataclasses.dataclass
class UpdateGameServerOutput:
    game_server: Optional[shared_gameserver.GameServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServer') }})
    
