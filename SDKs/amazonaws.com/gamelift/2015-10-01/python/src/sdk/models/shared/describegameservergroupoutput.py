import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameservergroup as shared_gameservergroup


@dataclass_json
@dataclasses.dataclass
class DescribeGameServerGroupOutput:
    game_server_group: Optional[shared_gameservergroup.GameServerGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroup') }})
    
