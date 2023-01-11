import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameserverinstance as shared_gameserverinstance


@dataclass_json
@dataclasses.dataclass
class DescribeGameServerInstancesOutput:
    game_server_instances: Optional[list[shared_gameserverinstance.GameServerInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerInstances') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
