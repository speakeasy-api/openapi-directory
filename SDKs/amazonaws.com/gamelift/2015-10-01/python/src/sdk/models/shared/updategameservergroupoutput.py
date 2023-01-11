import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameservergroup as shared_gameservergroup


@dataclass_json
@dataclasses.dataclass
class UpdateGameServerGroupOutput:
    game_server_group: Optional[shared_gameservergroup.GameServerGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroup') }})
    
